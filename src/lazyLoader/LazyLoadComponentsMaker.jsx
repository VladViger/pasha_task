import React from 'react';

import LazilyLoad from './LazilyLoad';

const importLazy = (promise) => (
	promise.then((result) => result.default)
);

export const LazyEntries = () => (
	<LazilyLoad modules={{
		Entries: () => importLazy(import('../containers/VisibleEntries'))
	}}>
		{({Entries}) => (
			<Entries />
		)}
	</LazilyLoad>
);

export const LazyLogInPanel = () => (
	<LazilyLoad modules={{
		LogInPanel: () => importLazy(import('../containers/VisibleLogInPanel'))
	}}>
		{({LogInPanel}) => (
			<LogInPanel />
		)}
	</LazilyLoad>
);

export const LazyRegisterPanel = () => (
	<LazilyLoad modules={{
		RegisterPanel: () => importLazy(import('../containers/VisibleRegisterPanel'))
	}}>
		{({RegisterPanel}) => (
			<RegisterPanel />
		)}
	</LazilyLoad>
);

export const LazyEntryCreator = () => (
	<LazilyLoad modules={{
		EntryCreator: () => importLazy(import('../containers/VisibleEntryCreator'))
	}}>
		{({EntryCreator}) => (
			<EntryCreator />
		)}
	</LazilyLoad>
);

export const LazyEntryEditor = () => (
	<LazilyLoad modules={{
		EntryEditor: () => importLazy(import('../containers/VisibleEntryEditor'))
	}}>
		{({EntryEditor}) => (
			<EntryEditor />
		)}
	</LazilyLoad>
);