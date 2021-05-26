export default function find(list, predicate) {
    for (var i = 0; i < list.length; i++) {
        if (predicate(list[i])) {
            return list[i];
        }
    }
}
//# sourceMappingURL=find.js.map