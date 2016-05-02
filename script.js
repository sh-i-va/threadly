var post = document.getElementById('post');
var commentsSection = document.getElementById('comments');
var prevComments = commentsSection.getElementsByTagName('li');

function formSubmit()
{
    var newComment = document.getElementById('newComment');

    if(newComment.value != '')
    {
        var newCommentNode = document.createElement('li');
        var commentTextNode = document.createTextNode(newComment.value);

        newCommentNode.appendChild(commentTextNode);
        var offset = newComment.offsetTop - commentsSection.offsetTop + 20;
        newCommentNode.style.top = offset + 'px';

        commentsSection.insertBefore(newCommentNode,commentsSection.firstChild);
        newComment.value = '';
        newComment.blur();

        window.setTimeout(function() {
            newCommentNode.style.top = '0';

            var prevHeight = 0;
            var ii;

            for(ii = 1; ii < prevComments.length; ii++) {
                prevHeight += prevComments[ii-1].clientHeight + 36;
                prevComments[ii].style.top = prevHeight + 'px';
            }
        }, 1);
    }

    return false;
}

post.onsubmit = formSubmit;
