import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, Img, A, Section } from '../style';

const Container = Section.extend``;
const Title = styled.h3`
  font-size: ${theme.fontSizes.lg};
  font-weight: 600;
  margin-bottom: ${theme.spacing.lg};
`;
const PlaylistsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: ${theme.spacing.lg};
`;
const Playlist = styled.div`
  text-align: center;
`;
const PlaylistImage = Img.extend`
  object-fit: cover;
`;
const PlaylistName = A.extend`
  margin: ${theme.spacing.base} 0 5px;
  border-bottom: 1px solid transparent;
  &:hover {
    border-bottom: 1px solid ${theme.colors.white};
  }
`;
const PlaylistDetails = styled.div`
  text-transform: uppercase;
  margin-bottom: 5px;
  color: ${theme.colors.grey};
  font-size: ${theme.fontSizes.xs};
  letter-spacing: 1px;
`;

class Playlists extends Component {
  render() {
    const { playlists } = this.props;
    // console.log(playlists.items);

    return (
      <Container>
        <Title>Your Playlists</Title>
        <PlaylistsContainer>
          {playlists.items.map((playlist, i) => (
            <Playlist key={i}>
              <PlaylistImage src={playlist.images[1].url} alt="" />
              <PlaylistName href={playlist.external_urls.spotify} target="_blank">
                {playlist.name}
              </PlaylistName>
              <PlaylistDetails>{playlist.tracks.total} Tracks</PlaylistDetails>
            </Playlist>
          ))}
        </PlaylistsContainer>
      </Container>
    );
  }
}

Playlists.propTypes = {
  playlists: PropTypes.object,
};

export default Playlists;