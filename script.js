var post = document.getElementById('post');

function formSubmit()
{
    var newComment = document.getElementById('newComment');
    var commentsSection = document.getElementById('comments');

    if(newComment.value != '')
    {
        var newCommentNode = document.createElement('li');
        var commentTextNode = document.createTextNode(newComment.value);

        newCommentNode.appendChild(commentTextNode);
        commentsSection.insertBefore(newCommentNode,commentsSection.firstChild);
        newComment.value = '';
        newComment.blur();
    }

    return false;
}

post.onsubmit = formSubmit;
