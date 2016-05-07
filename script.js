var post = document.getElementById('post');
var commentsSection = document.getElementById('comments');
var prevComments = commentsSection.getElementsByTagName('li');

function intro()
{
    var title = document.querySelector('h1');

    window.setTimeout(function() {
        title.style.opacity = '1';
        title.style.paddingLeft = '20px';
    }, 300);

    window.setTimeout(function() {
        post.style.opacity = '1';
        post.style.marginTop = '0';
    }, 800);
    
    window.setTimeout(function() {
        commentsSection.style.opacity = '1';
        prevComments[0].style.left = '0';
    }, 1100);

    window.setTimeout(function() {
        prevComments[1].style.left = '0';       
    }, 1170);
}

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

            commentsSection.style.height = (prevHeight + 87) + 'px'
        }, 1);
    }

    return false;
}

post.onsubmit = formSubmit;
window.onload = intro;
