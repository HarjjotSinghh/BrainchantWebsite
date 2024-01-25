'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ErrorOption, useForm } from 'react-hook-form';
import * as z from 'zod';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import ReactQuillContainer from './react-quill-container';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/supabase';
import ReactSelectContainer from '../../add-article/react-select-container';
import Link from 'next/link';
import { IoMdArrowRoundBack } from 'react-icons/io';

const formSchema = z.object({
    article_title: z
        .string()
        .min(20, {
            message: 'Title must be at least 20 characters.',
        })
        .max(500, { message: 'Title must be at most 500 characters.' }),
    article_content: z
        .string()
        .min(200, { message: 'Content must be at least 200 characters.' })
        .max(65000, { message: 'Content must be at most 65000 characters.' }),
    article_image_url: z
        .string()
        .url('Image link must be a valid URL.')
        .optional(),
    article_tags: z
        .array(z.object({ value: z.string(), label: z.string() }))
        .min(2, { message: 'Article must have at least 2 tags.' })
        .max(5, { message: 'Article must have at most 5 tags.' }),
});

export default function EditArticleForm({ articleData, articleTags }: { articleData: any, articleTags: any[] }) {
    const tags = articleTags.map((item) => ({
        value: item.tag,
        label: item.tag,
    }));
    const [loading, setLoading] = useState(false);
    const supabase = createClientComponentClient<Database>();
    const [message, setMessage] = useState('');
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            article_title: articleData.article_title,
            article_content: articleData.article_content,
            article_image_url: articleData.article_image_url,
            article_tags: articleData.article_tags.map((e: string) => ({
                value: e,
                label: e,
            })),
        },
    });
    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setLoading(true);
            const { error } = await supabase
                .from('articles')
                .update({
                    ...values,
                    article_tags: values.article_tags.map((e) => e.value),
                })
                .eq('article_slug', articleData.article_slug);
            if (error) {
                setMessage('Error updating article: ' + error.message);
                throw error;
            } else {
                setMessage(`Successfully updated your article.`);
            }
        } catch (error: any) {
            alert(`Error updating the article: \n${error.message}`);
            // console.log(error)
            setMessage(
                'Error updating the article. Please try again later or contact support.'
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="lg:px-16 px-4 py-24 pb-48 flex flex-col justify-center items-center gap-16">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 rounded-2xl lg:p-12 p-6 relative shadow-2xl shadow-foreground/5"
                >
                    <Link
                        href={'/dashboard'}
                        className="flex flex-row gap-2 items-center self-end w-fit"
                    >
                        <IoMdArrowRoundBack className="w-8 h-8 bg-primary rounded-full p-1.5" />
                        <h1 className='text-2xl lg:text-xl font-semibold hover:text-accent transition-all duration-300 ease-in-out'>Go Back</h1>
                    </Link>
                    <FormField
                        control={form.control}
                        name="article_title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="lg:text-lg text-base">
                                    Article Title
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="How To Do...."
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="article_image_url"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="lg:text-lg text-base">
                                    Article Image URL
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="A URL of the article image"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="article_tags"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="lg:text-lg text-base">
                                    Article Tags
                                </FormLabel>
                                <FormControl className="">
                                    <ReactSelectContainer articleTags={tags} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="article_content"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="lg:text-lg text-base">
                                    Article Content
                                </FormLabel>
                                <FormControl className="lg:w-[800px]">
                                    <ReactQuillContainer {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        variant={'secondary'}
                        className="lg:text-lg text-base py-6 w-full"
                        type="submit"
                        disabled={loading}
                    >
                        Update Article
                    </Button>
                    <p className="text-base text-center w-full">{message}</p>
                </form>
            </Form>
        </div>
    );
}
