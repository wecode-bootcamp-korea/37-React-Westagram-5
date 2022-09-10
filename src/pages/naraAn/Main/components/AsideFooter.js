import React from 'react';
import { FOOTER_DATA } from './footerData';
import './asideFooter.scss';

function AsideFooter() {
  return (
    <ul className="aside_footer">
      {FOOTER_DATA.map(footerData => {
        return (
          <li key={footerData.id}>
            <a href={footerData.link}>{footerData.text}</a>
          </li>
        );
      })}
    </ul>
  );
}
export default AsideFooter;
