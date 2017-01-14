import styles from './index.scss';
import React from 'react';

import Dropzone from 'react-dropzone';

export default class App extends React.Component {
  onDrop(files, rejected) {
    console.log('Got these files:', files);
    console.log('Rejected these files:', rejected);
  }

  render() {
    return (
      <div>
        <h1>It Works!</h1>
        <p>This React project just works including <span className={styles.redBg}>module</span> local styles.</p>
        <p>Enjoy!</p>
        <Dropzone accept=".jpg,.png"
            className={styles["drop-zone"]}
            activeClassName={styles["drop-zone-active"]}
            rejectClassName={styles["drop-zone-reject"]}
            multiple={false}
            onDrop={this.onDrop}
            >
          <div>Drop your files here</div>
        </Dropzone>
      </div>
    )
  }
}
