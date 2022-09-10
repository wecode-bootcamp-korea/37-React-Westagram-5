import { useState, useEffect } from 'react';

import Feeds from './Feeds';

const MainLeft = () => {
  const [feedsList, setFeedsList] = useState([]);

  useEffect(() => {
    fetch('/data/feedsDataJiwon.json')
      .then(res => res.json())
      .then(data => {
        setFeedsList(data);
      });
  }, []);

  return (
    <div>
      {feedsList.map(feed => (
        <Feeds feed={feed} key={feed.id} />
      ))}
    </div>
  );
};

export default MainLeft;
