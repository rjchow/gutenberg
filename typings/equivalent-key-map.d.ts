declare module 'equivalent-key-map' {
	class EquivalentKeyMap< K, V > extends Map< K, V > {
		_map: Map<unknown, [K, V]>;
	}
	export = EquivalentKeyMap;
}
