angular.module('noteApp').service('Shared',function(){
        var categoryId = [];
        return{
            getCategoryId: function(){
                return categoryId;
            },
            setCategoryId: function(value){
                categoryId=value;
            }
        };
    })
