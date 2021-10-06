initSidebarItems({"enum":[["KeyEvaluation","The result of evaluating a key that was scanned."],["KeyOperation","An operation to perform on a key."],["KeyRange","One or more keys."],["Operation","An operation that is performed on a set of keys."],["PageHeader","The header byte for a tree file’s page."]],"struct":[["CompareSwap","A wrapper for a [`CompareSwapFn`]."],["Modification","A tree modification."],["PagedWriter","Writes data in pages, allowing for quick scanning through the file."],["State","The current state of a tree file. Must be initialized before passing to `TreeFile::new` if the file already exists."],["TransactableCompaction","A compaction process that runs in concert with a transaction manager."],["TreeFile","An append-only tree file."],["TreeRoot","A named tree root."],["UnversionedTreeRoot","A versioned B-Tree root. This tree root internally uses two btrees, one to keep track of all writes using a unique “sequence” ID, and one that keeps track of all key-value pairs."],["VersionedTreeRoot","A versioned B-Tree root. This tree root internally uses two btrees, one to keep track of all writes using a unique “sequence” ID, and one that keeps track of all key-value pairs."]],"trait":[["Root","A B-Tree root implementation."]],"type":[["CompareSwapFn","A function that is allowed to check the current value of a key and determine how to operate on it. The first parameter is the key, and the second parameter is the current value, if present."]]});