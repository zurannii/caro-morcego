import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.html',
  styleUrls: ['./audio.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AudioPlayer implements OnInit {
  @ViewChild('audioRef') audioRef!: ElementRef<HTMLAudioElement>;

  isPlaying = false;
  progress = 0;

  ngOnInit() {}

  togglePlay() {
    const audio = this.audioRef.nativeElement;
    if (this.isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  updateProgress() {
    const audio = this.audioRef.nativeElement;
    this.progress = (audio.currentTime / audio.duration) * 100;
  }

  loadMetadata() {
    this.updateProgress();
  }

  seekAudio(event: Event) {
    const value = +(event.target as HTMLInputElement).value;
    const audio = this.audioRef.nativeElement;
    audio.currentTime = (value / 100) * audio.duration;
  }
}

