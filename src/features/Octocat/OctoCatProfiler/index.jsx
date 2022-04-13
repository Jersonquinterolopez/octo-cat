import React from 'react';

const OctoCatProfiler = ({ octocatUserName, setOctocat, fetchOctoCat }) => {
  return (
    <div className="is-flex is-align-items-center">
      <p className="mr-3">github.com/</p>
      <input
        type="text"
        className="input"
        placeholder="octocat"
        value={octocatUserName}
        onChange={(e) => setOctocat(e.target.value)}
      />
      <button
        className="button is-ghost is-medium"
        onClick={() => fetchOctoCat()}
      >
        🐙 🐈
      </button>
    </div>
  );
};

export default OctoCatProfiler;
