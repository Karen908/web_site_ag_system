import React from 'react';
import { CiSaveDown1 } from 'react-icons/ci';

const DownloadButton = () => {
  return (
    <a href="/img/Cn_apk/app-release.apk" className="download" download>
      <CiSaveDown1 size={20} />
    </a>
  );
};

export default DownloadButton;
