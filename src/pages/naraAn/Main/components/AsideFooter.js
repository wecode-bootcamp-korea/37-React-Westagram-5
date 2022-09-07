import React from 'react';
import { FOOTER_LIST } from './footerData';

function AsideFooter() {
  return (
    <ul className="footer_list">
      {FOOTER_LIST.map(footerList => {
        return (
          <li key={footerList.id}>
            <a href={footerList.link}>{footerList.text}</a>
          </li>
        );
      })}
    </ul>
  );
}
export default AsideFooter;
