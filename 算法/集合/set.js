function Set() {
    let items = {}; // 对象具有键值唯一性，符合集合的特性
    this.has = function(value) {
        return items.hasOwnProperty(value);
    }

    this.add = function(value) {
        if(items[value]) {
            return false
        } else {
            items[value] = value;
            return true
        }
    }

    this.remove = function(value) {
        if(this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    }

    this.clear = function() {

        items = {};
    }

    this.size = function() {
        let count = 0;
        for(let key in items) {
            if(this.has(key)) {
                count++;
            }
        }
        return count;
    }

    this.values = function() {
        let values = [];
        for(let key in items) {
            if(this.has(key)) {
                values.push(items[key]);
            }
        }
        return values;
    }

    this.get = function() {
        return items;
    }

    // 并集实现
    this.union = function(otherSet) {
        let unionSet = new Set();

        let values = this.values();
        for(let i =0; i<values.length; i++) {
            unionSet.add(values[i]);
        }

        values = otherSet.values();

        for(let i =0; i<values.length; i++) {
            unionSet.add(values[i]);
        }

        return unionSet;
    }

    // 交集实现
    this.intersection = function(otherSet) {
        let intersectionSet = new Set();

        let values = this.values();

        for(let i = 0; i<values.length; i++) {
            if(otherSet.has(values[i])) {
                intersectionSet.add(values[i])
            }
        }

        return intersectionSet;
    }

    // 差集实现
    this.difference = function(otherSet) {
        let differenceSet = new Set();
        let values = this.values();

        for(let i = 0; i<values.length; i++) {
            if(!otherSet.has(values[i])) {
                differenceSet.add(values[i])
            }
        }

        return differenceSet;
    }

    // 子集实现
    this.subset = function(otherSet) {
        if(this.size() > otherSet.size()) {
            return false;
        } else {
            let values = this.values();
            for(let i = 0; i < values.length; i++) {
                if(!otherSet.has(values[i])) {
                    return false;
                }
            }
            return true;
        }
    }
}

var a = new Set();

a.add(1);
a.add(2);

var b = new Set();

b.add(1);
b.add(4)

var unionab = a.union(b);
console.log(unionab.values());

var intersectionab = a.intersection(b);
console.log(intersectionab.values());

var differenceab = a.difference(b);
console.log(differenceab.values());

var subset = a.subset(b);
console.log(subset);
