import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [], selectedVideos: null };

  componentDidMount() {
    this.onTermSubmit("building");
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideos: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideos: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onTermSubmit} />

        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideos} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
