'use strict';

app.factory('Post', function(DS, $state) {
    var Post = DS.defineResource({
        name: 'posts',
        relations: {
            belongsTo: {
                users: {
                    localField: '_author',
                    localKey: 'author'
                }
            }
        },
        methods: {
            go: function() {
                $state.go('post', {
                    title: this.title,
                    postId: this._id,
                    authorId: this.author
                });
            }
        }
    });
    return Post;
}).run(function (Post) {});
