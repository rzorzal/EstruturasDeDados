ESTRUTURAS = {
    List: function (capacity) {
        var collection = [];

        if (capacity != null) {
            collection[capacity];
        }


        ///Get the element at the specified index
        this.getItem = function (index) {
            if (index <= collection.length - 1) {
                return collection[index];
            }
            else {
                throw "Index was out of range. Must be non-negative and less than the size of the collection";
            }
        };

        ///Set the element at the specified index
        this.setItem = function (index, item) {
            if (index <= collection.length - 1) {
                collection[index] = item;
            }
            else {
                throw "Index was out of range. Must be non-negative and less than the size of the collection";
            }
        };

        ///Adds an object to the end of the Collections.
        this.addItem = function (item) {
            collection[collection.length] = item;
        };


        ///Adds the elements of the specified collection to the end of the Collections.
        this.addRange = function (items) {
            for (var i = 0; i < items.length; i++) {
                collection[collection.length] = items.getItem(i);
            }
        };

        ///Inserts an element into the System.Collections.Generic.List<T> at the specified index.
        this.insert = function (pos, item) {
            if (pos <= collection.length - 1) {
                collection.splice(pos, 0, item);
            }
            else {
                throw "Index must be within the bounds of the List";
            }
        };

        ///Removes all elements from the Collections.
        this.clear = function () {
            collection = [];
        };

        ///Gets the number of elements actually contained in the Collections.
        this.count = function () {
            return collection.length;
        };

        ///Determines whether the specified object instances are considered equal.
        this.equal = function (x, y) {
            return (x === y);
        };

        this.find = function (obj) {
            var index = -1;

            for (var i = 0; i < collection.length; i++) {
                var item = collection[i];

                if (this.Equal(item, obj)) {
                    index = i;
                    break;
                }
            }

            return index;
        };

        ///Checks whether the element exists in the collection
        this.exists = function (obj) {
            var isFind = false;

            if (this.Find(obj) > -1) {
                isFind = true;
            }

            return isFind;
        };

        ///Performs the specified action on each element of the Collections.
        this.forEach = function (action) {
            for (var i = 0; i < collection.length; i++) {
                var item = collection[i];

                action(item);
            }
        };

        ///Removes the element at the specified index of the collection
        this.removeAt = function (index) {
            collection.splice(index, 1);
        };

        ///Removes a range of elements from the collection
        this.removeRange = function (index, count) {
            collection.splice(index, count);
        };

        ///Creates a shallow copy of a range of elements in the source collection
        this.getRange = function (index, count) {
            newList = new ESTRUTURAS.List();

            var indexCount = 0;

            for (var i = index; i < collection.length; i++) {
                var item = collection[i];

                if (indexCount < count) {
                    newList.Add(item);
                }
                else {
                    break;
                }

                indexCount++;
            }

            return newList;
        };


    },
    ArvoreBinariaBusca: function () {
        var classeNo = function () {
            var dir = undefined;
            var esq = undefined;
            var value = undefined;
            var obj = undefined;

            this.setDir = function (direita) {
                this.dir = direita;
                return this;
            }

            this.setEsq = function (esquerda) {
                this.esq = esquerda;
                return this;
            }

            this.setValue = function (valor) {
                this.value = valor;
                return this;
            }

            this.setObj = function (objeto) {
                this.obj = objeto;
                return this;
            }

            this.getDir = function () {
                return this.dir;
            }

            this.getEsq = function () {
                return this.esq;
            }

            this.getValue = function () {
                return this.value;
            }

            this.getObj = function () {
                return this.obj;
            }

        }

        ESTRUTURAS.ArvoreBinariaBusca.newNo = function () {
            return new classeNo();
        }

        var estrutura = undefined;

        this.addNo = function (no) {
            if (typeof estrutura == "undefined") {
                estrutura = no;
                return;
            }

            var pointer = estrutura;
            while (true) {
                var prox;
                if (pointer.getValue() >= no.getValue()) {
                    prox = pointer.getEsq();
                    if (typeof prox == "undefined") {
                        pointer.setEsq(no);
                        return;
                    } else {
                        pointer = pointer.getEsq();
                    }
                } else {
                    prox = pointer.getDir();
                    if (typeof prox == "undefined") {
                        pointer.setDir(no);
                        return;
                    } else {
                        pointer = pointer.getDir();
                    }
                }
            }

        }

        this.search = function (value) {
            var pointer = estrutura;
            var prox;
            while (true) {
                if (pointer.getValue() == value) {
                    return pointer;
                }

                if (pointer.getValue() >= value) {
                    prox = pointer.getEsq();
                    if (typeof prox == "undefined") {
                        return false;
                    } else {
                        pointer = pointer.getEsq();
                    }
                } else {
                    prox = pointer.getDir();
                    if (typeof prox == "undefined") {
                        return false;
                    } else {
                        pointer = pointer.getDir();
                    }
                }

            }
        }

    },
    Pilha: function () {
        this.estrutura = [];

        this.addItem = function (item) {
            this.estrutura[this.estrutura.length] = item;
            return this;
        }

        this.getItem = function () {
            var item = this.estrutura[this.size() - 1];
            this.estrutura.splice(this.estrutura.length - 1,1);
            return item;
        }

        this.clear = function () {
            this.estrutura = [];
        }

        this.size = function () {
            return this.estrutura.length;
        }

        this.empty = function () {
            return this.estrutura.length == 0;
        }
    },
    Fila: function () {
        this.estrutura = [];

        this.addItem = function (item) {
            this.estrutura[this.estrutura.length] = item;
            return this;
        }

        this.getItem = function () {
            var item = this.estrutura[0];
            this.estrutura.splice(0,1);
            return item;
        }

        this.clear = function () {
            this.estrutura = [];
        }

        this.size = function () {
            return this.estrutura.length;
        }

        this.empty = function () {
            return this.estrutura.length == 0;
        }
    },
    Map: function () {
        var estrutura = {};

        this.addItem = function (key, value) {
            estrutura[key] = value;
            return this;
        }

        this.removeItem = function (key) {
            delete estrutura[key];
            return this;
        }

        this.getItem = function (key) {
            return estrutura[key];
        }
        
        this.clear = function(){
            estrutura = {};
            return this;
        }


    }
};

if (typeof module != "undefined") {
    if (typeof module.exports != "undefined") {
        module.exports = ESTRUTURAS;
    }
}

