'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/supabase';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';
import CreatableSelect from 'react-select/creatable';
export default function ReactSelectContainer(props: any) {
    const supabase = createClientComponentClient<Database>();
    const [tags, setTags] = useState<Array<any>>([]);
    const [loading, setLoading] = useState(false);
    const loadingComponent = ({ className }: { className: string }) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn('animate-spin', className)}
            >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
        );
    };
    const getTags = useCallback(async () => {
        try {
            setLoading(true);
            const { data: tagsData, error: tagsError } = await supabase
                .from('article_tags')
                .select('*');
            if (typeof tagsError === (null || undefined)) {
                alert('Failed to fetch current tags.');
                setTags([]);
            } else {
                const tags_ = tagsData?.map((item) => ({
                    value: item.tag,
                    label: item.tag,
                }));
                setTags(tags_ ?? []);
                console.log(tags);
            }
        } catch (error: any) {
            console.error(error);
            throw error;
        } finally {
            setLoading(false);
        }
    }, [supabase,tags])
    async function addTag(tag: string) {
        try {
            setLoading(true);
            setTags(tags.concat({ value: tag, label: tag }));
            const { data: tagsData, error: tagsError } = await supabase
                .from('article_tags')
                .upsert({
                    tag: tag.toString(),
                });
            console.log(tagsData, tagsError);
            if (tagsError) {
                alert('Failed to add the tag.');
                setTags([]);
            }
        } catch (error: any) {
            console.error(error);
            throw error;
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getTags();
    }, [getTags]);
    return (
        <CreatableSelect
            onCreateOption={addTag}
            closeMenuOnScroll={true}
            isLoading={loading}
            isMulti
            allowCreateWhileLoading={false}
            options={tags || []}
            {...props}
            className="hue-rotate-[55deg] z-10"
        />
    );
}
