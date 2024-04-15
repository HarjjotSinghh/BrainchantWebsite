import React from 'react';
import SearchBarClient from './search-bar-client';
import supabaseServer from '@/utils/supabase/supabaseServer';

export default async function SearchBar() {
	const supabase = supabaseServer();
	const { data: subjects, error } = await supabase.from('subjects').select('*');

	return <SearchBarClient subjects={error ? [] : subjects}></SearchBarClient>;
}
