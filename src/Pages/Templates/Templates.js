import React from 'react';
import './Templates.css';
import Pic06 from '../../Assets/FINESSE.png';

export default function Templates() {
  return (
    <div className="template-page">
      <h1 className="heading">Check out the templates I've made using React</h1>
      <div className="section">
        <a className="finesse" target="_blank" rel="noreferrer" href="https://finesse.samueltrahan.com/">
          <section>
            <h1 className="finesse-head">Finesse</h1>
          </section>
        </a>
        <a className="lion" target="_blank" rel="noreferrer" href="https://lion.samueltrahan.com">
          <section>
            <h1 className="lion-head">Lion</h1>
          </section>
        </a>
        <a className="morning" target="_blank" rel="noreferrer" href="https://morning.samueltrahan.com">
          <section>
            <h1 className="morning-head">Morning</h1>
          </section>
        </a>
      </div>
    </div>
  )
}
