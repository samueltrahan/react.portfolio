import React from 'react';
import './Templates.css';

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
          <section className="morning-logo">
            <h1 className="morning-head">Morning</h1>
          </section>
        </a>
        <a className="elite" target="_blank" rel="noreferrer" href="https://elite.samueltrahan.com">
        <section>
          <h1 className="elite-head">Elite</h1>
        </section>
        </a>
        <a className="moon" target="_blank" rel="noreferrer" href="https://moon.samueltrahan.com">
          <section className="moon-logo">
            <h1 className="moon-head">Moon</h1>
          </section>
        </a>
        <a className="ambition" target="_blank" rel="noreferrer" href="https://ambition.samueltrahan.com">
          <section className="ambition-logo">
            <h1 className="ambition-head">Ambition</h1>
          </section>
        </a>
      </div>
    </div>
  )
}
