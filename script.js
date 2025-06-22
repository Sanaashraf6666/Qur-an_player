 let surah = 1;
    const audio = document.getElementById('audio');
    const surahTitle = document.getElementById('surahTitle');

    const baseUrl = 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/';

    function updateAudio() {
      const surahNum = surah.toString();
      audio.src = baseUrl + surahNum + '.mp3';
      surahTitle.innerText = 'Surah ' + surahNum;
      audio.load();
      audio.play();
    }

    function prevSurah() {
      if (surah > 1) {
        surah--;
        updateAudio();
      }
    }

    function nextSurah() {
      if (surah < 114) {
        surah++;
        updateAudio();
      }
    }

    function togglePlay() {
  const icon = document.querySelector('.fa-play, .fa-pause');

  if (audio.paused) {
    audio.play();
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
  } else {
    audio.pause();
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
  }
}


    // Initial load
    updateAudio();