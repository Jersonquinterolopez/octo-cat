import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  widht: 100px;
`;

const OctocatCard = ({ octo, octoRepoStars, technologies }) => {
  const { avatar_url, followers, bio } = octo;

  return (
    <div className="box mt-6">
      <Card>
        <div className="is-flex">
          <div>
            <h3 className="is-title is-3">Octocat's Profile</h3>
            <div className="p-3">
              <figure className="image is-128x128">
                <img src={avatar_url} alt="avatar" className="is-rounded" />
              </figure>
            </div>
          </div>

          <div className="pt-6">
            <p>
              {octoRepoStars} <strong> ⭐️ Stars</strong>
            </p>
            <p>
              {followers} <strong> 🎳 Followers</strong>
            </p>
            <p>Bio: {bio}</p>

            <div>
              Stack:
              <ul>
                {technologies?.map((technology, index) => (
                  <li key={index}>
                    <span class="tag is-info">{technology.language}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default OctocatCard;
