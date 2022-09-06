import { useState, useEffect } from 'react';

import Feeds from './Feeds';

const MainLeft = () => {
  const [feedsList, setFeedsList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/feedsDataJiwon.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeedsList(data);
      });
  }, []);

  return (
    <div>
      {feedsList.map(e => (
        <Feeds
          userName={e.userName}
          userImage={e.userImage}
          uploadedImage={e.uploadedImage}
          userComment={e.userComment}
          key={e.id}
        />
      ))}
    </div>
  );
};

export default MainLeft;
