class MusicPlayer {
  constructor(musicList) {
    this.musicList = musicList;
    this.index = 0; // Start from the first song
  }

  getMusic() {
    return this.musicList[this.index];
  }

  next() {
    if (this.index + 1 < this.musicList.length) {
      this.index++;
    } else {
      this.index = 0; // Loop back to the start
    }
  }

  prev() {
    if (this.index > 0) {
      this.index--;
    } else {
      this.index = this.musicList.length - 1; // Loop to the end
    }
  }
}
