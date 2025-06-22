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
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }

    // Initial load
    updateAudio();