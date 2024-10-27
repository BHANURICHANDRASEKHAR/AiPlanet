import React from 'react';
import Avatar from 'antd/es/avatar/avatar';

export default function Avatar1({ url }) {
  const avatarSrc = url === 'AI' 
    ? "https://webit.ai/app/public/cdn/faceart/examples/billie_eilish/webit-faceart-0hiR1VlWZUc4TwCb.jpg" 
    : 'https://thumbs.dreamstime.com/b/user-sign-icon-person-symbol-human-avatar-rich-man-84519083.jpg';

  return (
   <div  >
   <Avatar 
  className={url == 'AI' ? 'rounded-4 m-1 ai-message' : 'm-1 user-message bg-danger'} 
   src={avatarSrc} 
   alt="avatar" 
   size={40} 
 />
   </div>
  );
}
