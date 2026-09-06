"use client";

// Web Audio API Synthesizer for Tactile Mechanical Keyboard and Tactical SFX
// Zero external sound assets needed - 100% lightweight & instantaneous

class CyberAudioManager {
  private ctx: AudioContext | null = null;
  private isEnabled: boolean = true; // Sound enabled by default

  constructor() {
    // AudioContext will resume on first user interaction to comply with browser autoplay policy
  }

  private initCtx() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public toggleAudio(): boolean {
    this.isEnabled = !this.isEnabled;
    if (this.isEnabled) {
      this.initCtx();
      this.playBeep(880, 0.04);
    }
    return this.isEnabled;
  }

  public getStatus(): boolean {
    return this.isEnabled;
  }

  // Crisp tactile mechanical click sound (Fantech / mechanical tactile switch)
  public playSwitchClick() {
    if (!this.isEnabled) return;
    this.initCtx();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(680 + Math.random() * 60, now);
    osc.frequency.exponentialRampToValueAtTime(110, now + 0.028);

    gain.gain.setValueAtTime(0.14, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.028);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.035);
  }

  // Tactical HUD beep (for target lock, mode switch, or success)
  public playBeep(freq: number = 750, duration: number = 0.05) {
    if (!this.isEnabled) return;
    this.initCtx();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + duration);
  }

  // Alias for HUD interactions
  public playHudBeep(freq: number = 750, duration: number = 0.05) {
    this.playBeep(freq, duration);
  }
}

export const cyberAudio = new CyberAudioManager();
