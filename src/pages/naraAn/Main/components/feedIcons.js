import React from 'react';

const iconList = [
  { id: 1, content: <i className="fa-regular fa-heart" /> },
  { id: 2, content: <i className="fa-regular fa-comment" /> },
  { id: 3, content: <i className="fa-regular fa-paper-plane" /> },
];

function FeedIcons() {
  return (
    <ul className="feed_icons">
      <li>
        {iconList.map(icon => {
          return <button key={icon.id}>{icon.content}</button>;
        })}
      </li>
      <li>
        <button>
          <i className="fa-regular fa-bookmark" />
        </button>
      </li>
    </ul>
  );
}
export default FeedIcons;
