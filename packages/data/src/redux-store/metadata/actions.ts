/**
 * Internal dependencies
 */
import type { MapOf, Selector, SelectorParameters } from '../../types';

/**
 * Returns an action object used in signalling that selector resolution has
 * started.
 *
 * @param selectorName Name of selector for which resolver triggered.
 * @param args         Arguments to associate for uniqueness.
 */
export function startResolution< Selectors extends MapOf< Selector > >(
	selectorName: keyof Selectors,
	args: SelectorParameters< Selectors[ typeof selectorName ] >
): {
	type: 'START_RESOLUTION';
	selectorName: keyof Selectors;
	args: SelectorParameters< Selectors[ typeof selectorName ] >;
} {
	return {
		type: 'START_RESOLUTION',
		selectorName,
		args,
	};
}

/**
 * Returns an action object used in signalling that selector resolution has
 * completed.
 *
 * @param selectorName Name of selector for which resolver triggered.
 * @param args         Arguments to associate for uniqueness.
 */
export function finishResolution< Selectors extends MapOf< Selector > >(
	selectorName: keyof Selectors,
	args: SelectorParameters< Selectors[ typeof selectorName ] >
): {
	type: 'FINISH_RESOLUTION';
	selectorName: keyof Selectors;
	args: SelectorParameters< Selectors[ typeof selectorName ] >;
} {
	return {
		type: 'FINISH_RESOLUTION',
		selectorName,
		args,
	};
}

/**
 * Returns an action object used in signalling that selector resolution has
 * failed.
 *
 * @param selectorName Name of selector for which resolver triggered.
 * @param args         Arguments to associate for uniqueness.
 * @param error        The error that caused the failure.
 */
export function failResolution< Selectors extends MapOf< Selector > >(
	selectorName: keyof Selectors,
	args: SelectorParameters< Selectors[ typeof selectorName ] >,
	error: Error | unknown
): {
	type: 'FAIL_RESOLUTION';
	selectorName: keyof Selectors;
	args: SelectorParameters< Selectors[ typeof selectorName ] >;
	error: Error | unknown;
} {
	return {
		type: 'FAIL_RESOLUTION',
		selectorName,
		args,
		error,
	};
}

/**
 * Returns an action object used in signalling that a batch of selector resolutions has
 * started.
 *
 * @param selectorName Name of selector for which resolver triggered.
 * @param args         Array of arguments to associate for uniqueness, each item
 *                     is associated to a resolution.
 */
export function startResolutions< Selectors extends MapOf< Selector > >(
	selectorName: keyof Selectors,
	args: Array< SelectorParameters< Selectors[ typeof selectorName ] > >
): {
	type: 'START_RESOLUTIONS';
	selectorName: keyof Selectors;
	args: Array< SelectorParameters< Selectors[ typeof selectorName ] > >;
} {
	return {
		type: 'START_RESOLUTIONS',
		selectorName,
		args,
	};
}

/**
 * Returns an action object used in signalling that a batch of selector resolutions has
 * completed.
 *
 * @param selectorName Name of selector for which resolver triggered.
 * @param args         Array of arguments to associate for uniqueness, each item
 *                     is associated to a resolution.
 */
export function finishResolutions< Selectors extends MapOf< Selector > >(
	selectorName: keyof Selectors,
	args: Array< SelectorParameters< Selectors[ typeof selectorName ] > >
): {
	type: 'FINISH_RESOLUTIONS';
	selectorName: keyof Selectors;
	args: Array< SelectorParameters< Selectors[ typeof selectorName ] > >;
} {
	return {
		type: 'FINISH_RESOLUTIONS',
		selectorName,
		args,
	};
}

/**
 * Returns an action object used in signalling that a batch of selector resolutions has
 * completed and at least one of them has failed.
 *
 * @param selectorName Name of selector for which resolver triggered.
 * @param args         Array of arguments to associate for uniqueness, each item
 *                     is associated to a resolution.
 * @param errors       Array of errors to associate for uniqueness, each item
 *                     is associated to a resolution.
 */
export function failResolutions< Selectors extends MapOf< Selector > >(
	selectorName: keyof Selectors,
	args: Array< SelectorParameters< Selectors[ typeof selectorName ] > >,
	errors: Array< Error | unknown >
): {
	type: 'FAIL_RESOLUTIONS';
	selectorName: keyof Selectors;
	args: Array< SelectorParameters< Selectors[ typeof selectorName ] > >;
	errors: Array< Error | unknown >;
} {
	return {
		type: 'FAIL_RESOLUTIONS',
		selectorName,
		args,
		errors,
	};
}

/**
 * Returns an action object used in signalling that we should invalidate the resolution cache.
 *
 * @param selectorName Name of selector for which resolver should be invalidated.
 * @param args         Arguments to associate for uniqueness.
 */
export function invalidateResolution< Selectors extends MapOf< Selector > >(
	selectorName: keyof Selectors,
	args: SelectorParameters< Selectors[ typeof selectorName ] >
): {
	type: 'INVALIDATE_RESOLUTION';
	selectorName: keyof Selectors;
	args: SelectorParameters< Selectors[ typeof selectorName ] >;
} {
	return {
		type: 'INVALIDATE_RESOLUTION',
		selectorName,
		args,
	};
}

/**
 * Returns an action object used in signalling that the resolution
 * should be invalidated.
 */
export function invalidateResolutionForStore(): {
	type: 'INVALIDATE_RESOLUTION_FOR_STORE';
} {
	return {
		type: 'INVALIDATE_RESOLUTION_FOR_STORE',
	};
}

/**
 * Returns an action object used in signalling that the resolution cache for a
 * given selectorName should be invalidated.
 *
 * @param selectorName Name of selector for which all resolvers should be invalidated.
 */
export function invalidateResolutionForStoreSelector<
	Selectors extends MapOf< Selector >,
>(
	selectorName: keyof Selectors
): {
	type: 'INVALIDATE_RESOLUTION_FOR_STORE_SELECTOR';
	selectorName: keyof Selectors;
} {
	return {
		type: 'INVALIDATE_RESOLUTION_FOR_STORE_SELECTOR',
		selectorName,
	};
}
