/**
 * ============================================================================
 *  AHMED & MARYAM — PERSONAL CONFIGURATION & EXPERIENCE SCRIPT
 *  --------------------------------------------------------------------------
 *  أحمد: كل النصوص، الصور، الذكريات، الرسائل، والموسيقى موجودة هنا في
 *  قسم SITE_CONFIG بالأسفل لتسهيل التعديل من مكان واحد فقط.
 * ============================================================================
 */

export const SITE_CONFIG = {
  brand: "أحمد ومريم",

  music: {
    // مسار ملف الصوت — يبدأ التشغيل تلقائياً من الثانية 25
    src: "/assets/aistudio/08.Qusad_Einy_0d1fc57f.mp3",
    startTimeSeconds: 25,
    autoplay: true,
    playLabel: "موسيقى · تشغيل",
    pauseLabel: "موسيقى · إيقاف",
  },

  entry: {
    eyebrow: "رسالة خاصة · إلى مريم",
    quoteLines: [
      "في حكايات بتبدأ بالصدفة...",
      "وحكايتنا ليها مكان تاني.",
    ],
    cardSalutation: "مريم،",
    cardMessage:
      "قبل ما تكملي، كنت عاوز أقولك إن كل تفصيلة هنا اتعملت عشانك إنتِ بس... خدي نفس هادي وافتحي حكايتنا.",
    cardSignature: "أحمد",
    enterButtonText: "ادخلي عالمنا",
  },

  hero: {
    kicker: "من أحمد · إلى مريم",
    title: "إلى مريم... أجمل صدفة في حياتي",
    subtitle:
      "في يوم كل الناس بتتكلم فيه عن الحب، أنا حبيت أعملك حاجة تفضل فاكرانا.",
    ctaText: "ابدئي حكايتنا",
    image: "/assets/aistudio/1143281055399200803_0625e476.jfif",
    imageAlt: "مشهد ليلي هادئ تحت ضوء القمر على البحر",
    caption: "القمر والبحر وهدوء ليلة بتشبه راحتي معاكي",
  },

  // --------------------------------------------------------------------------
  // 3. OUR STORY — محطات حكايتنا (تقدر تعدل أي تاريخ أو تفصيلة من هنا)
  // --------------------------------------------------------------------------
  timeline: [
    {
      index: "01",
      label: "أول لقاء",
      datePlaceholder: "14 أكتوبر 2024 · الكوربة، مصر الجديدة",
      title: "اليوم اللي بدأت فيه الحكاية",
      description:
        "لسه فاكر اليوم ده كأنه إمبارح؛ الدنيا كانت نسمة خفيفة قدام المكتبة في الكوربة، وأول ما شفتك وسمعت ضحكتك وإنتِ بتعتذري عن الزحمة، حسيت إن اليوم ده مش هيعدي عادي... وإن دي بداية حاجة هتفضل معايا العمر كله.",
      image: "/assets/aistudio/The_Silence_Between_Two_Heartbeats_c299cf3d.jfif",
      imageAlt: "لقاء دافئ تحت ضوء مصباح الحديقة",
    },
    {
      index: "02",
      label: "أول كلام بينا",
      datePlaceholder: "18 أكتوبر 2024 · كافيه هادي في الزمالك",
      title: "أول كلام بينا",
      description:
        "قعدنا نتكلم في حاجات كتير ملهاش آخر، من الكتب والأغاني لحد تفاصيل يومنا العادية. الغريب إن تلات ساعات عدّوا وإحنا فاكرين إننا لسه قاعدين من 10 دقايق، ومن يومها بقيت بستنى كلامك كل يوم.",
      image: "/assets/aistudio/868068896940754957_d27423f1.jfif",
      imageAlt: "حوار قريب في أجواء دافئة",
    },
    {
      index: "03",
      label: "أول ذكرى مميزة",
      datePlaceholder: "8 نوفمبر 2024 · كورنيش المعادي",
      title: "أول ذكرى مميزة",
      description:
        "تمشية طويلة على النيل قبل المغرب بكوبايتين قهوة، والهوا كان ساقع شوية بس كلامنا كان مدفّي الدنيا. يومها ضحكنا على أتفه الحاجات، وعرفت قد إيه القعدة معاكي بتخلي أي مكان بسيط يبقى أحلى مكان في الدنيا.",
      image: "/assets/aistudio/773352567311312898_ae3690f0.jfif",
      imageAlt: "سير معاً وسط المساحات الخضراء",
    },
    {
      index: "04",
      label: "نقطة التحول",
      datePlaceholder: "27 ديسمبر 2024 · سهرة شتا",
      title: "اللحظة اللي كل حاجة اتغيرت فيها",
      description:
        "كنت راجع من يوم طويل وتعبان جداً، وبمجرد ما كلمتيني وسمعت صوتك كل التعب راح في ثانية. اللحظة دي بالذات فهمت فيها إنك مش مجرد حد لطيف في حياتي... إنتِ بقيتِ راحتي وبيتي اللي برجع له من دوشة الدنيا.",
      image: "/assets/aistudio/1123718544549561363_1e864f47.jfif",
      imageAlt: "لحظة شاعرية تحت سماء الليل المضيئة",
    },
    {
      index: "05",
      label: "الأقرب لقلبي",
      datePlaceholder: "21 مارس 2025 · إسكندرية على البحر",
      title: "أجمل ذكرى في قلبي",
      description:
        "وقفتنا قدام البحر ساعة الغروب وصوت الموج حوالينا، وإنتِ باصة للميه ومبتسمة بهدوء. اليوم ده فضل محفور في قلبي بكل تفاصيله، وكل ما أفتكره بدعي ربنا إننا نعيش زيه وأحلى منه سنين كتير جاية.",
      image: "/assets/aistudio/923871311080377881_79bdada6.jfif",
      imageAlt: "عناق دافئ عند الغروب",
    },
  ],

  // --------------------------------------------------------------------------
  // 4. THE LOVE LETTER — رسالة أحمد إلى مريم (بالعامية المصرية)
  // --------------------------------------------------------------------------
  loveLetter: {
    dateLabel: "14 فبراير · إلى مريم",
    placeLabel: "القاهرة، ليلة هادية",
    salutation: "مريم الغالية،",
    paragraphs: [
      "يمكن مش بعرف دايماً أرتب الكلام الكبير، بس اللي متأكد منه من أول يوم عرفتك فيه إن وجودك في حياتي خلاها أهدى وأجمل بكتير.",
      "بحب طريقتك وإنتِ بتحكي لي عن يومك بحماس، وبحب إنك بتاخدي بالك من التفاصيل الصغيرة اللي محدش غيرك بيشوفها. حتى في الأيام اللي ببقى فيها مضغوط أو ساكت، نظرة واحدة منك أو كلمة بسيطة بتطمني وترجعلي روحي.",
      "أنا مبسوط بكل لحظة بنعيشها سوا؛ بضحكنا اللي بيطلع من القلب، بتمشيتنا من غير ما نبص في الساعة، وبإحساس الأمان اللي بلاقي نفسي فيه وأنا جنبك.",
      "نفسي نفضل دايماً نختار بعض في كل حاجة، ونبني ذكريات بسيطة وصادقة تشبهنا، وتفضل حكايتنا أحلى حاجة حصلت لي في الدنيا.",
      "شكراً إنك إنتِ، وإنك منورة أيامي يا مريم.",
    ],
    closing: "بكل صدق وحب،",
    signature: "أحمد",
  },

  // --------------------------------------------------------------------------
  // 5. THE MEMORY GALLERY — ألبوم الذكريات
  // --------------------------------------------------------------------------
  gallery: [
    {
      src: "/assets/aistudio/The_Silence_Between_Two_Heartbeats_c299cf3d.jfif",
      alt: "نظرة دافئة تحت الزهور الوردية وضوء المساء",
      layoutClass: "gallery-piece--tall",
      cropEdge: false,
      meta: "الذكرى الأولى · الكوربة · أكتوبر 2024",
      title: "نظرة بتقول كل حاجة",
      caption:
        "قعدة بسيطة تحت نور الشارع والورد، بس في النظرة دي كان فيه كلام كتير أصدق من أي جملة ممكن تتقال.",
    },
    {
      src: "/assets/aistudio/1143281055399200803_0625e476.jfif",
      alt: "الوقوف أمام البحر تحت اكتمال القمر",
      layoutClass: "gallery-piece--wide",
      cropEdge: false,
      meta: "الذكرى الثانية · إسكندرية · مارس 2025",
      title: "قمر وليلة هادية",
      caption:
        "لما الدنيا كلها هديت حوالينا وما فضلش غير صوت البحر والقمر وإحنا واقفين جنباً لجنب.",
    },
    {
      src: "/assets/aistudio/773352567311312898_ae3690f0.jfif",
      alt: "المشي يداً بيد في طبيعة هادئة",
      layoutClass: "gallery-piece--feature",
      cropEdge: false,
      meta: "الذكرى الثالثة · يوم إجازة · نوفمبر 2024",
      title: "خطوة واحدة، وطريق واحد",
      caption:
        "مشوار طويل على رجلينا من غير ما نحس بالوقت، وإيدي في إيدك كأن الطريق معمول لينا لوحدنا.",
    },
    {
      src: "/assets/aistudio/1123718544549561363_1e864f47.jfif",
      alt: "أضواء ذهبية بين قلبين في المساء",
      layoutClass: "gallery-piece--portrait",
      cropEdge: false,
      meta: "الذكرى الرابعة · ليلة شتا · ديسمبر 2024",
      title: "الهدوء اللي بينا",
      caption:
        "أجمل ما في وجودك إن حتى السكوت معاكي مريح، وكأن قلوبنا بتفهم بعض من غير ولا كلمة.",
    },
    {
      src: "/assets/aistudio/923871311080377881_79bdada6.jfif",
      alt: "عناق مبهج في ساعة الغروب",
      layoutClass: "gallery-piece--medium",
      cropEdge: true,
      meta: "الذكرى الخامسة · وقت الغروب · فبراير 2025",
      title: "ضحكة من القلب",
      caption:
        "من أكتر اللحظات اللي ضحكنا فيها من قلبنا، وحسيت وقتها إن فرحتك هي أكتر حاجة تهمني في الدنيا.",
    },
    {
      src: "/assets/aistudio/1120974163527887992_1e062753.jfif",
      alt: "الجري على الشاطئ وقت الغروب",
      layoutClass: "gallery-piece--offset",
      cropEdge: false,
      meta: "الذكرى السادسة · الساحل · صيف 2025",
      title: "على شط الغروب",
      caption:
        "بنضحك ونجري قدام الموج والسما لونها دهبي... يوم تمنيت فيه لو نعرف نوقف الساعة عند اللحظة دي.",
    },
  ],

  // --------------------------------------------------------------------------
  // 6. THE LITTLE SURPRISES — 3 رسائل مغلقة بالعامية المصرية
  // --------------------------------------------------------------------------
  surprises: [
    {
      number: "رسالة 1",
      sealMark: "1",
      title: "لما يومك يكون طويل",
      message:
        "لو يومك كان متعب أو حاسة إن الدنيا زحمة عليكي، افتكري دايماً إنك مش لوحدك. أنا هنا على طول أسمعك من غير أي شروط، وأحاول أهون عليكي أي تعب بكلمة أو حتى بسكوتي جنبك.",
    },
    {
      number: "رسالة 2",
      sealMark: "2",
      title: "سر صغير عنك",
      message:
        "حاجة يمكن مقولتهاش كفاية: لمعة عينيك وإنتِ بتتكلمي عن حاجة بتحبيها أو بتخططي ليوم حلو هي أجمل منظر بشوفه في حياتي، وبتخليني أبتسم غصب عني كل مرة.",
    },
    {
      number: "رسالة 3",
      sealMark: "3",
      title: "وعد من قلبي",
      message:
        "أوعدك إني أفضل دايماً سندك قبل ما أكون حبيبك، أحترم قلبك وراحتك في كل وقت، وأفضل أختارك كل يوم من جديد زي أول مرة قابلتك فيها.",
    },
  ],

  // --------------------------------------------------------------------------
  // 7. THE SPECIAL QUESTION
  // --------------------------------------------------------------------------
  question: {
    preludeLines: [
      "مريم، لو كان ينفع أختار حاجة واحدة",
      "تفضل معايا من كل الدنيا...",
      "هختارك إنتِ.",
    ],
    prompt: "تفضلي نعمل ذكريات أحلى سوا؟",
    yesLabel: "أكيد، دايماً",
    thinkLabel: "خليني أفكر شوية",
    thinkStepLabels: [
      "متأكدة؟ فكري تاني",
      "بجد هتسيبيني مستني؟",
      "قلبي بيقولك قولي أيوة",
      "خلاص الاختيار ده اتقفل",
    ],
    playfulHints: [
      "يعني محتاجة تفكير بجد؟",
      "لسه برضه بتفكري؟",
      "قلبي مستنيكي تقولي أيوة...",
      "مبقاش في اختيار تاني غير إنك تدوسي أكيد، دايماً!",
    ],
    yesConfirmation:
      "وأنا أوعدك إن اللي جاي سوا هيكون أحلى بكتير من كل اللي فات... شكراً إنك في حياتي يا مريم.",
  },

  // --------------------------------------------------------------------------
  // 8. THE FINAL EXPERIENCE
  // --------------------------------------------------------------------------
  finale: {
    headline: "كل سنة وإنتِ أجمل حاجة في أيامي.",
    signature: "من أحمد... لمريم، بكل الحب.",
    image: "/assets/aistudio/1120974163527887992_1e062753.jfif",
  },
};

/**
 * ============================================================================
 *  PURE TESTABLE HELPERS (Imported by unit tests & browser runtime)
 * ============================================================================
 */

export function getTypewriterSlice(fullText, progressCount) {
  const safeText = typeof fullText === "string" ? fullText : "";
  const clamped = Math.max(0, Math.min(safeText.length, Math.floor(progressCount)));
  return safeText.slice(0, clamped);
}

export function wrapIndex(currentIndex, delta, totalLength) {
  if (!Number.isFinite(totalLength) || totalLength <= 0) return 0;
  return (((currentIndex + delta) % totalLength) + totalLength) % totalLength;
}

export function formatCounter(index, total) {
  const pad = (n) => (n < 10 ? `0${n}` : String(n));
  return `${pad(index + 1)} / ${pad(total)}`;
}

export function computeSafeDodgeOffset(attemptCount, containerWidth = 360) {
  const safeStep = Math.max(0, Math.floor(attemptCount));
  if (safeStep >= 3) {
    return { x: 0, y: 0, stepIndex: 3, dimmed: true };
  }
  const maxX = Math.max(24, Math.min(90, Math.floor(containerWidth * 0.22)));
  const patterns = [
    { x: maxX, y: -14 },
    { x: -maxX, y: 12 },
    { x: Math.round(maxX * 0.6), y: -18 },
  ];
  const chosen = patterns[safeStep % patterns.length];
  return { x: chosen.x, y: chosen.y, stepIndex: safeStep, dimmed: false };
}

export function toggleSurpriseState(openSet, index) {
  const next = new Set(openSet);
  if (next.has(index)) {
    next.delete(index);
  } else {
    next.add(index);
  }
  return next;
}

export function getStackDepth(cardIndex, activeIndex, total) {
  if (!Number.isFinite(total) || total <= 0) return "hidden";
  const offset = wrapIndex(cardIndex - activeIndex, 0, total);
  if (offset === 0) return "0";
  if (offset === 1) return "1";
  if (offset === 2) return "2";
  return "hidden";
}

export function clampStartTime(startSec, durationSec) {
  if (!Number.isFinite(startSec) || startSec <= 0) return 0;
  if (Number.isFinite(durationSec) && durationSec > 0 && startSec >= durationSec) {
    return 0;
  }
  return startSec;
}

export function evaluateSwipeGesture(dx, dy, threshold = 48) {
  if (!Number.isFinite(dx) || !Number.isFinite(dy)) return null;
  const absX = Math.abs(dx);
  const absY = Math.abs(dy);
  if (absX < 10 && absY < 10) return "tap";
  if (absX >= threshold && absX > absY * 1.15) {
    return dx < 0 ? "next" : "prev";
  }
  return null;
}

/**
 * ============================================================================
 *  ROMANTIC AUDIO ENGINE (MP3 starting at configured second + Synth Fallback)
 * ============================================================================
 */
class RomanticAudioEngine {
  constructor(musicConfig) {
    const cfg =
      typeof musicConfig === "string"
        ? { src: musicConfig, startTimeSeconds: 0, autoplay: false }
        : musicConfig || {};

    this.customSrc = cfg.src || "";
    this.startTimeSeconds = Number(cfg.startTimeSeconds) || 0;
    this.autoplay = Boolean(cfg.autoplay);
    this.audioEl =
      typeof document !== "undefined" ? document.getElementById("bg-audio") : null;
    this.ctx = null;
    this.loopTimer = null;
    this.isPlaying = false;
    this.manuallyPaused = false;
    this.hasAppliedInitialSeek = false;
    this.stepIndex = 0;
    this.onStateChange = null;
    this.useCustomAudio = Boolean(
      this.customSrc && this.customSrc.trim().length > 0
    );

    if (this.audioEl && this.useCustomAudio) {
      this.audioEl.src = this.customSrc;
      this.audioEl.volume = 0.65;

      this.audioEl.addEventListener("loadedmetadata", () => {
        this.seekToStartIfNeeded(false);
      });

      this.audioEl.addEventListener("ended", () => {
        const startAt = clampStartTime(
          this.startTimeSeconds,
          this.audioEl.duration
        );
        this.audioEl.currentTime = startAt;
        if (this.isPlaying) {
          this.audioEl.play().catch(() => {});
        }
      });

      this.audioEl.addEventListener("error", () => {
        this.useCustomAudio = false;
      });
    }
  }

  seekToStartIfNeeded(force = false) {
    if (!this.audioEl || this.audioEl.readyState < 1) return false;
    const target = clampStartTime(this.startTimeSeconds, this.audioEl.duration);
    if (
      force ||
      !this.hasAppliedInitialSeek ||
      this.audioEl.currentTime < Math.max(0, target - 0.5)
    ) {
      try {
        this.audioEl.currentTime = target;
        this.hasAppliedInitialSeek = true;
      } catch {
        return false;
      }
    }
    return true;
  }

  notifyState() {
    if (typeof this.onStateChange === "function") {
      this.onStateChange(this.isPlaying);
    }
  }

  async toggle() {
    if (this.isPlaying) {
      this.pause(true);
      return false;
    }
    this.manuallyPaused = false;
    await this.play({ fromAutoplay: false });
    return this.isPlaying;
  }

  async tryAutoplay() {
    if (!this.autoplay || this.manuallyPaused || this.isPlaying) return false;
    return this.play({ fromAutoplay: true });
  }

  async play({ fromAutoplay = false } = {}) {
    if (this.isPlaying) return true;

    if (this.useCustomAudio && this.audioEl) {
      this.seekToStartIfNeeded(false);
      try {
        await this.audioEl.play();
        if (!this.hasAppliedInitialSeek && this.audioEl.readyState >= 1) {
          this.seekToStartIfNeeded(true);
        }
        this.isPlaying = true;
        this.notifyState();
        return true;
      } catch (err) {
        // Browser autoplay blocked before first user gesture: keep customSrc ready
        if (fromAutoplay || (err && err.name === "NotAllowedError")) {
          this.isPlaying = false;
          this.notifyState();
          return false;
        }
        // Only fall back to synth if the file itself cannot play
        this.useCustomAudio = false;
      }
    }

    if (fromAutoplay) {
      return false;
    }

    this.isPlaying = true;
    this.startSynth();
    this.notifyState();
    return true;
  }

  pause(isManual = false) {
    this.isPlaying = false;
    if (isManual) {
      this.manuallyPaused = true;
    }
    if (this.audioEl && !this.audioEl.paused) {
      this.audioEl.pause();
    }
    if (this.loopTimer) {
      clearInterval(this.loopTimer);
      this.loopTimer = null;
    }
    if (this.ctx && this.ctx.state === "running") {
      this.ctx.suspend().catch(() => {});
    }
    this.notifyState();
  }

  startSynth() {
    const AudioContextClass =
      window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    if (!this.ctx) {
      this.ctx = new AudioContextClass();
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }

    // Gentle D minor / F major nocturnal waltz arpeggio (warm felt piano timbre)
    const progression = [
      [293.66, 349.23, 440.0, 523.25], // Dm7
      [233.08, 293.66, 349.23, 440.0], // Bbmaj7
      [261.63, 329.63, 392.0, 493.88], // Cmaj7
      [220.0, 261.63, 329.63, 392.0], // Am7
    ];

    const playNote = (freq, delaySec, durationSec, gainLevel) => {
      if (!this.ctx || !this.isPlaying) return;
      const now = this.ctx.currentTime + delaySec;
      const osc = this.ctx.createOscillator();
      const subOsc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now);
      subOsc.type = "sine";
      subOsc.frequency.setValueAtTime(freq * 0.5, now);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(980, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(gainLevel, now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec);

      osc.connect(filter);
      subOsc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      subOsc.start(now);
      osc.stop(now + durationSec + 0.05);
      subOsc.stop(now + durationSec + 0.05);
    };

    const scheduleBar = () => {
      if (!this.isPlaying) return;
      const chord = progression[this.stepIndex % progression.length];
      chord.forEach((freq, idx) => {
        playNote(freq, idx * 0.45, 2.4, idx === 0 ? 0.045 : 0.032);
      });
      this.stepIndex += 1;
    };

    scheduleBar();
    if (this.loopTimer) clearInterval(this.loopTimer);
    this.loopTimer = setInterval(scheduleBar, 2400);
  }
}

/**
 * ============================================================================
 *  BROWSER EXPERIENCE CONTROLLER
 * ============================================================================
 */
function initExperience() {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  hydrateStaticConfigText();
  renderTimeline();
  renderGallery();
  renderSurprises();

  const audioEngine = new RomanticAudioEngine(SITE_CONFIG.music);
  setupMusicControls(audioEngine);
  setupAmbientParticles(prefersReducedMotion);
  setupCustomCursor(prefersReducedMotion);
  setupSecretEntry(prefersReducedMotion);
  setupScrollRevealsAndNav(prefersReducedMotion);
  setupLoveLetterTypewriter(prefersReducedMotion);
  setupLightbox();
  setupSpecialQuestion(prefersReducedMotion);
  setupFinaleReplay();
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el && typeof value === "string") {
    el.textContent = value;
  }
}

function hydrateStaticConfigText() {
  setText("site-brand", SITE_CONFIG.brand);
  setText("entry-eyebrow", SITE_CONFIG.entry.eyebrow);
  const entryQuote = document.getElementById("entry-quote");
  if (entryQuote) {
    entryQuote.innerHTML = "";
    SITE_CONFIG.entry.quoteLines.forEach((line, idx) => {
      entryQuote.appendChild(document.createTextNode(line));
      if (idx < SITE_CONFIG.entry.quoteLines.length - 1) {
        entryQuote.appendChild(document.createTextNode(" "));
        entryQuote.appendChild(document.createElement("br"));
      }
    });
  }
  setText("entry-card-salutation", SITE_CONFIG.entry.cardSalutation);
  setText("entry-card-message", SITE_CONFIG.entry.cardMessage);
  setText("entry-card-signature", SITE_CONFIG.entry.cardSignature);
  setText("enter-experience-btn", SITE_CONFIG.entry.enterButtonText);

  setText("hero-kicker", SITE_CONFIG.hero.kicker);
  setText("hero-title", SITE_CONFIG.hero.title);
  setText("hero-subtitle", SITE_CONFIG.hero.subtitle);
  setText("hero-cta", SITE_CONFIG.hero.ctaText);
  setText("hero-caption", SITE_CONFIG.hero.caption);

  const heroImg = document.getElementById("hero-image");
  if (heroImg) {
    heroImg.src = SITE_CONFIG.hero.image;
    heroImg.alt = SITE_CONFIG.hero.imageAlt;
    attachImageFallback(heroImg, SITE_CONFIG.hero.caption);
  }

  setText("letter-date-label", SITE_CONFIG.loveLetter.dateLabel);
  setText("letter-place-label", SITE_CONFIG.loveLetter.placeLabel);
  setText("letter-salutation", SITE_CONFIG.loveLetter.salutation);
  setText("letter-closing", SITE_CONFIG.loveLetter.closing);
  setText("letter-signature", SITE_CONFIG.loveLetter.signature);

  const preludeEl = document.getElementById("question-prelude");
  if (preludeEl) {
    preludeEl.innerHTML = "";
    SITE_CONFIG.question.preludeLines.forEach((line, idx) => {
      preludeEl.appendChild(document.createTextNode(line));
      if (idx < SITE_CONFIG.question.preludeLines.length - 1) {
        preludeEl.appendChild(document.createTextNode(" "));
        preludeEl.appendChild(document.createElement("br"));
      }
    });
  }
  setText("question-prompt", SITE_CONFIG.question.prompt);
  setText("choice-yes", SITE_CONFIG.question.yesLabel);
  setText("choice-think", SITE_CONFIG.question.thinkLabel);

  setText("finale-headline", SITE_CONFIG.finale.headline);
  setText("finale-signature", SITE_CONFIG.finale.signature);
  const finaleImg = document.getElementById("finale-image");
  if (finaleImg) {
    finaleImg.src = SITE_CONFIG.finale.image;
  }
}

function attachImageFallback(imgEl, fallbackTitle) {
  imgEl.addEventListener("error", () => {
    const parent = imgEl.parentElement;
    if (!parent) return;
    imgEl.style.display = "none";
    parent.style.background =
      "radial-gradient(circle at 40% 30%, rgba(167, 96, 110, 0.35), rgba(40, 10, 20, 0.96))";
    if (!parent.querySelector(".img-fallback-note")) {
      const note = document.createElement("div");
      note.className = "img-fallback-note";
      note.style.cssText =
        "display:flex;align-items:center;justify-content:center;height:100%;padding:1.5rem;text-align:center;color:#ead0d6;font-family:var(--font-display);font-size:1.15rem;";
      note.textContent = fallbackTitle || "لحظة محفوظة في القلب";
      parent.appendChild(note);
    }
  });
}

function setupSecretEntry(prefersReducedMotion) {
  const entryEl = document.getElementById("secret-entry");
  const mainEl = document.getElementById("main-experience");
  const envelopeWrap = document.getElementById("envelope-wrap");
  const envelopeTrigger = document.getElementById("envelope-trigger");
  const envelopeCard = document.getElementById("envelope-card");
  const enterBtn = document.getElementById("enter-experience-btn");

  const params = new URLSearchParams(window.location.search);
  const autostart = params.get("autostart") === "1";

  const enterMainExperience = () => {
    document.body.setAttribute("data-experience-state", "main");
    if (entryEl) {
      entryEl.classList.add("is-dismissed");
      entryEl.setAttribute("aria-hidden", "true");
    }
    if (mainEl) {
      mainEl.setAttribute("aria-hidden", "false");
    }
    if (!prefersReducedMotion) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  };

  if (autostart) {
    enterMainExperience();
    return;
  }

  if (envelopeTrigger && envelopeWrap && envelopeCard) {
    envelopeTrigger.addEventListener("click", () => {
      const isCurrentlyOpen = envelopeWrap.classList.contains("is-open");
      if (!isCurrentlyOpen) {
        envelopeWrap.classList.add("is-open");
        entryEl?.classList.add("is-envelope-open");
        envelopeTrigger.setAttribute("aria-expanded", "true");
        envelopeCard.setAttribute("aria-hidden", "false");
        setTimeout(() => {
          enterBtn?.focus({ preventScroll: true });
        }, prefersReducedMotion ? 10 : 500);
      }
    });
  }

  if (enterBtn) {
    enterBtn.addEventListener("click", enterMainExperience);
  }
}

function renderTimeline() {
  const container = document.getElementById("timeline-container");
  if (!container) return;

  SITE_CONFIG.timeline.forEach((item, idx) => {
    const article = document.createElement("article");
    article.className = `timeline-item reveal-item ${
      idx % 2 === 1 ? "timeline-item--even" : ""
    }`;

    const marker = document.createElement("span");
    marker.className = "timeline-item__marker";
    marker.setAttribute("aria-hidden", "true");

    const content = document.createElement("div");
    content.className = "timeline-item__content";

    const meta = document.createElement("div");
    meta.className = "timeline-item__meta";

    const indexSpan = document.createElement("span");
    indexSpan.className = "timeline-item__index";
    indexSpan.textContent = item.index;

    const sep1 = document.createElement("span");
    sep1.setAttribute("aria-hidden", "true");
    sep1.textContent = "·";

    const labelSpan = document.createElement("span");
    labelSpan.textContent = item.label;

    const sep2 = document.createElement("span");
    sep2.setAttribute("aria-hidden", "true");
    sep2.textContent = "·";

    const dateSpan = document.createElement("span");
    dateSpan.textContent = item.datePlaceholder;

    meta.append(indexSpan, sep1, labelSpan, sep2, dateSpan);

    const title = document.createElement("h3");
    title.className = "timeline-item__title";
    title.textContent = item.title;

    const body = document.createElement("p");
    body.className = "timeline-item__body";
    body.textContent = item.description;

    content.append(meta, title, body);

    const figure = document.createElement("figure");
    figure.className = "timeline-item__media";

    const img = document.createElement("img");
    img.className = "timeline-item__img";
    img.src = item.image;
    img.alt = item.imageAlt;
    img.loading = "lazy";
    attachImageFallback(img, item.title);

    figure.appendChild(img);
    article.append(marker, content, figure);
    container.appendChild(article);
  });
}

function renderGallery() {
  const container = document.getElementById("editorial-gallery");
  if (!container || SITE_CONFIG.gallery.length === 0) return;

  SITE_CONFIG.gallery.forEach((photo, idx) => {
    const figure = document.createElement("figure");
    figure.className = `gallery-piece ${
      photo.layoutClass || "gallery-piece--medium"
    } reveal-item`;

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "gallery-piece__trigger gallery-zoom-trigger";
    trigger.dataset.galleryIndex = String(idx);
    trigger.setAttribute("aria-label", `افتحي الصورة: ${photo.title}`);

    const frame = document.createElement("div");
    frame.className = "gallery-piece__frame";

    const img = document.createElement("img");
    img.className = `gallery-piece__img ${
      photo.cropEdge ? "gallery-piece__img--crop-edge" : ""
    }`;
    img.src = photo.src;
    img.alt = photo.alt;
    img.loading = idx < 2 ? "eager" : "lazy";
    attachImageFallback(img, photo.title);

    const overlay = document.createElement("div");
    overlay.className = "gallery-piece__overlay";
    overlay.setAttribute("aria-hidden", "true");

    frame.append(img, overlay);

    const polaroidLabel = document.createElement("span");
    polaroidLabel.className = "gallery-piece__polaroid-label";
    polaroidLabel.textContent = photo.title;

    trigger.append(frame, polaroidLabel);

    const figcaption = document.createElement("figcaption");
    figcaption.className = "gallery-piece__caption-wrap";

    const meta = document.createElement("p");
    meta.className = "gallery-piece__meta";
    meta.textContent = photo.meta;

    const caption = document.createElement("p");
    caption.className = "gallery-piece__caption";
    caption.textContent = photo.caption;

    figcaption.append(meta, caption);
    figure.append(trigger, figcaption);
    container.appendChild(figure);
  });
}

function renderSurprises() {
  const grid = document.getElementById("surprises-grid");
  if (!grid) return;

  let openSet = new Set();

  SITE_CONFIG.surprises.forEach((surprise, idx) => {
    const card = document.createElement("article");
    card.className = "surprise-letter reveal-item";

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "surprise-letter__trigger";
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-controls", `surprise-body-${idx}`);

    const seal = document.createElement("span");
    seal.className = "surprise-letter__seal";
    seal.setAttribute("aria-hidden", "true");
    seal.textContent = surprise.sealMark;

    const label = document.createElement("span");
    label.className = "surprise-letter__label";
    label.textContent = surprise.number;

    const title = document.createElement("h3");
    title.className = "surprise-letter__title";
    title.textContent = surprise.title;

    const status = document.createElement("span");
    status.className = "surprise-letter__status";
    status.textContent = "افتحي الظرف";

    trigger.append(seal, label, title, status);

    const bodyWrap = document.createElement("div");
    bodyWrap.className = "surprise-letter__body-wrap";
    bodyWrap.id = `surprise-body-${idx}`;
    bodyWrap.setAttribute("aria-hidden", "true");

    const bodyInner = document.createElement("div");
    bodyInner.className = "surprise-letter__body-inner";

    const content = document.createElement("div");
    content.className = "surprise-letter__content";

    const message = document.createElement("p");
    message.className = "surprise-letter__message";
    message.textContent = surprise.message;

    content.appendChild(message);
    bodyInner.appendChild(content);
    bodyWrap.appendChild(bodyInner);
    card.append(trigger, bodyWrap);

    trigger.addEventListener("click", () => {
      openSet = toggleSurpriseState(openSet, idx);
      const isOpen = openSet.has(idx);
      card.classList.toggle("is-open", isOpen);
      trigger.setAttribute("aria-expanded", String(isOpen));
      bodyWrap.setAttribute("aria-hidden", String(!isOpen));
      status.textContent = isOpen ? "أغلقي الظرف" : "افتحي الظرف";
    });

    grid.appendChild(card);
  });
}

function setupLoveLetterTypewriter(prefersReducedMotion) {
  const bodyEl = document.getElementById("letter-typed-body");
  const caretEl = document.getElementById("typing-caret");
  const actionBtn = document.getElementById("letter-replay-btn");
  const sectionEl = document.getElementById("love-letter");
  if (!bodyEl || !sectionEl) return;

  const fullText = SITE_CONFIG.loveLetter.paragraphs.join("\n\n");
  let timerId = null;
  let charIndex = 0;
  let hasStarted = false;
  let isComplete = false;

  const showComplete = () => {
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }
    charIndex = fullText.length;
    bodyEl.textContent = fullText;
    isComplete = true;
    caretEl?.classList.add("is-done");
    if (actionBtn) {
      actionBtn.textContent = "إعادة قراءة الرسالة";
    }
  };

  const stepTyping = () => {
    if (charIndex >= fullText.length) {
      showComplete();
      return;
    }
    charIndex += 1;
    bodyEl.textContent = getTypewriterSlice(fullText, charIndex);
    const currentChar = fullText[charIndex - 1];
    const delay =
      currentChar === "\n" ? 260 : currentChar === "،" || currentChar === "." ? 140 : 28;
    timerId = setTimeout(stepTyping, delay);
  };

  const startTyping = () => {
    if (prefersReducedMotion) {
      showComplete();
      return;
    }
    if (timerId) clearTimeout(timerId);
    charIndex = 0;
    isComplete = false;
    hasStarted = true;
    bodyEl.textContent = "";
    caretEl?.classList.remove("is-done");
    if (actionBtn) {
      actionBtn.textContent = "إظهار الرسالة كاملة";
    }
    stepTyping();
  };

  if (prefersReducedMotion) {
    showComplete();
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            startTyping();
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(sectionEl);
  }

  if (actionBtn) {
    actionBtn.addEventListener("click", () => {
      if (!isComplete) {
        showComplete();
      } else {
        startTyping();
      }
    });
  }
}

function setupLightbox() {
  const lightbox = document.getElementById("lightbox");
  const backdrop = document.getElementById("lightbox-backdrop");
  const imgEl = document.getElementById("lightbox-img");
  const titleEl = document.getElementById("lightbox-title");
  const metaEl = document.getElementById("lightbox-meta");
  const captionEl = document.getElementById("lightbox-caption");
  const counterEl = document.getElementById("lightbox-counter");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");
  const galleryRoot = document.getElementById("editorial-gallery");

  if (!lightbox || !imgEl || !galleryRoot) return;

  let currentIndex = 0;
  let lastTriggerEl = null;

  const updateView = () => {
    const item = SITE_CONFIG.gallery[currentIndex];
    if (!item) return;
    imgEl.src = item.src;
    imgEl.alt = item.alt;
    if (titleEl) titleEl.textContent = item.title;
    if (metaEl) metaEl.textContent = item.meta;
    if (captionEl) captionEl.textContent = item.caption;
    if (counterEl) {
      counterEl.textContent = formatCounter(
        currentIndex,
        SITE_CONFIG.gallery.length
      );
    }
  };

  const openLightbox = (index, triggerEl) => {
    currentIndex = wrapIndex(index, 0, SITE_CONFIG.gallery.length);
    lastTriggerEl = triggerEl || null;
    updateView();
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
    closeBtn?.focus();
  };

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
    lastTriggerEl?.focus();
  };

  galleryRoot.addEventListener("click", (event) => {
    const trigger = event.target.closest(".gallery-zoom-trigger");
    if (!trigger) return;
    const idx = Number(trigger.dataset.galleryIndex || 0);
    openLightbox(idx, trigger);
  });

  prevBtn?.addEventListener("click", () => {
    currentIndex = wrapIndex(currentIndex, -1, SITE_CONFIG.gallery.length);
    updateView();
  });

  nextBtn?.addEventListener("click", () => {
    currentIndex = wrapIndex(currentIndex, 1, SITE_CONFIG.gallery.length);
    updateView();
  });

  // Touch & pointer swipe inside fullscreen Lightbox
  const mediaWrap = lightbox.querySelector(".lightbox__media-wrap");
  if (mediaWrap) {
    let swipeStartX = 0;
    let swipeStartY = 0;
    let swipePointerId = null;

    mediaWrap.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      swipePointerId = event.pointerId;
      swipeStartX = event.clientX;
      swipeStartY = event.clientY;
    });

    mediaWrap.addEventListener("pointerup", (event) => {
      if (event.pointerId !== swipePointerId) return;
      swipePointerId = null;
      const gesture = evaluateSwipeGesture(
        event.clientX - swipeStartX,
        event.clientY - swipeStartY,
        44
      );
      if (gesture === "next") {
        currentIndex = wrapIndex(currentIndex, 1, SITE_CONFIG.gallery.length);
        updateView();
      } else if (gesture === "prev") {
        currentIndex = wrapIndex(currentIndex, -1, SITE_CONFIG.gallery.length);
        updateView();
      }
    });

    mediaWrap.addEventListener("pointercancel", () => {
      swipePointerId = null;
    });
  }

  closeBtn?.addEventListener("click", closeLightbox);
  backdrop?.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (event.key === "Escape") {
      closeLightbox();
    } else if (event.key === "ArrowLeft") {
      currentIndex = wrapIndex(currentIndex, 1, SITE_CONFIG.gallery.length);
      updateView();
    } else if (event.key === "ArrowRight") {
      currentIndex = wrapIndex(currentIndex, -1, SITE_CONFIG.gallery.length);
      updateView();
    }
  });
}

function setupSpecialQuestion(prefersReducedMotion) {
  const section = document.getElementById("question");
  const yesBtn = document.getElementById("choice-yes");
  const thinkBtn = document.getElementById("choice-think");
  const actionsWrap = document.getElementById("question-actions");
  const feedbackEl = document.getElementById("question-feedback");

  if (!section || !yesBtn || !thinkBtn || !actionsWrap || !feedbackEl) return;

  let dodgeCount = 0;
  let answered = false;

  const dimThinkButton = () => {
    thinkBtn.style.transform = "translate3d(0, 0, 0)";
    thinkBtn.classList.add("is-dimmed");
    thinkBtn.disabled = true;
    thinkBtn.setAttribute("aria-disabled", "true");
    yesBtn.classList.add("is-highlighted");
  };

  const acceptQuestion = () => {
    answered = true;
    section.classList.add("is-celebrating");
    feedbackEl.textContent = SITE_CONFIG.question.yesConfirmation;
    dimThinkButton();
    yesBtn.textContent = "دايماً وأبداً";
    window.dispatchEvent(new CustomEvent("ahmed-maryam:celebrate"));
  };

  yesBtn.addEventListener("click", acceptQuestion);

  thinkBtn.addEventListener("click", () => {
    if (answered || thinkBtn.disabled) return;
    const containerWidth = actionsWrap.clientWidth || 360;
    const result = computeSafeDodgeOffset(dodgeCount, containerWidth);

    const stepLabels = SITE_CONFIG.question.thinkStepLabels || [];
    if (stepLabels[result.stepIndex]) {
      thinkBtn.textContent = stepLabels[result.stepIndex];
    }

    const hint =
      SITE_CONFIG.question.playfulHints[
        result.stepIndex % SITE_CONFIG.question.playfulHints.length
      ];
    feedbackEl.textContent = hint;

    if (result.dimmed) {
      dimThinkButton();
      return;
    }

    if (!prefersReducedMotion) {
      thinkBtn.style.transform = `translate3d(${result.x}px, ${result.y}px, 0)`;
    }
    dodgeCount += 1;
  });
}

function setupFinaleReplay() {
  const btn = document.getElementById("replay-journey-btn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  });
}

function setupMusicControls(audioEngine) {
  const toggleBtn = document.getElementById("music-toggle");
  const labelEl = document.getElementById("music-toggle-label");
  if (!toggleBtn || !labelEl) return;

  const syncMusicButton = (nowPlaying) => {
    toggleBtn.classList.toggle("is-playing", nowPlaying);
    toggleBtn.setAttribute("aria-pressed", String(nowPlaying));
    toggleBtn.setAttribute(
      "aria-label",
      nowPlaying ? "إيقاف الموسيقى الهادئة" : "تشغيل الموسيقى الهادئة"
    );
    labelEl.textContent = nowPlaying
      ? SITE_CONFIG.music.pauseLabel
      : SITE_CONFIG.music.playLabel;
  };

  audioEngine.onStateChange = syncMusicButton;

  toggleBtn.addEventListener("click", async () => {
    const nowPlaying = await audioEngine.toggle();
    syncMusicButton(nowPlaying);
  });

  if (SITE_CONFIG.music.autoplay) {
    const unlockAutoplay = async (event) => {
      if (event && event.target && event.target.closest("#music-toggle")) {
        return;
      }
      if (audioEngine.manuallyPaused || audioEngine.isPlaying) {
        removeUnlockListeners();
        return;
      }
      const started = await audioEngine.tryAutoplay();
      if (started) {
        removeUnlockListeners();
      }
    };

    const removeUnlockListeners = () => {
      document.removeEventListener("pointerdown", unlockAutoplay, true);
      document.removeEventListener("click", unlockAutoplay, true);
      document.removeEventListener("keydown", unlockAutoplay, true);
    };

    audioEngine.tryAutoplay().then((started) => {
      if (!started && !audioEngine.manuallyPaused) {
        document.addEventListener("pointerdown", unlockAutoplay, {
          capture: true,
          passive: true,
        });
        document.addEventListener("click", unlockAutoplay, {
          capture: true,
          passive: true,
        });
        document.addEventListener("keydown", unlockAutoplay, {
          capture: true,
          passive: true,
        });
      }
    });
  }
}

function setupScrollRevealsAndNav(prefersReducedMotion) {
  const revealItems = Array.from(document.querySelectorAll(".reveal-item"));
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((el) => el.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
    );
    revealItems.forEach((el) => revealObserver.observe(el));
  }

  // Timeline spine progress & Finale zoom reveal
  const timeline = document.getElementById("timeline-container");
  const spineFill = document.getElementById("timeline-spine-fill");
  const finale = document.getElementById("finale");
  const navLinks = Array.from(document.querySelectorAll(".site-nav__link"));
  const sections = navLinks
    .map((link) => {
      const id = link.getAttribute("href")?.slice(1);
      return id ? document.getElementById(id) : null;
    })
    .filter(Boolean);

  const onScroll = () => {
    if (timeline && spineFill) {
      const rect = timeline.getBoundingClientRect();
      const viewportH = window.innerHeight || 900;
      const totalTravel = rect.height + viewportH * 0.45;
      const currentProgress = viewportH * 0.65 - rect.top;
      const pct = Math.max(0, Math.min(100, (currentProgress / totalTravel) * 100));
      spineFill.style.height = `${pct}%`;
    }

    if (finale) {
      const fRect = finale.getBoundingClientRect();
      if (fRect.top < window.innerHeight * 0.85) {
        finale.classList.add("is-in-view");
      }
    }

    const scrollPos = window.scrollY + 140;
    let activeId = "";
    sections.forEach((sec) => {
      if (sec.offsetTop <= scrollPos) {
        activeId = sec.id;
      }
    });
    navLinks.forEach((link) => {
      const target = link.getAttribute("href")?.slice(1);
      link.classList.toggle("is-active", target === activeId);
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function setupAmbientParticles(prefersReducedMotion) {
  const canvas = document.getElementById("ambient-particles");
  if (!canvas || prefersReducedMotion) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let celebrateBoost = 0;

  const resize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  };
  resize();
  window.addEventListener("resize", resize);

  const particleCount = Math.min(48, Math.max(24, Math.floor(width / 32)));
  const particles = Array.from({ length: particleCount }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: 0.9 + Math.random() * 1.8,
    vy: -(0.12 + Math.random() * 0.25),
    vx: (Math.random() - 0.5) * 0.16,
    alpha: 0.16 + Math.random() * 0.34,
    isGold: Math.random() > 0.45,
  }));

  window.addEventListener("ahmed-maryam:celebrate", () => {
    celebrateBoost = 120;
  });

  const render = () => {
    if (!document.hidden && !document.body.classList.contains("lightbox-open")) {
      ctx.clearRect(0, 0, width, height);
      const speedMultiplier = celebrateBoost > 0 ? 2.4 : 1;
      if (celebrateBoost > 0) celebrateBoost -= 1;

      particles.forEach((p) => {
        p.y += p.vy * speedMultiplier;
        p.x += p.vx * speedMultiplier;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.isGold
          ? `rgba(201, 166, 107, ${p.alpha})`
          : `rgba(234, 208, 214, ${p.alpha * 0.85})`;
        ctx.fill();
      });
    }

    window.requestAnimationFrame(render);
  };

  window.requestAnimationFrame(render);
}

function setupCustomCursor(prefersReducedMotion) {
  const cursor = document.getElementById("ambient-cursor");
  if (
    !cursor ||
    prefersReducedMotion ||
    !window.matchMedia("(hover: hover) and (pointer: fine)").matches
  ) {
    return;
  }

  let targetX = -100;
  let targetY = -100;
  let currentX = -100;
  let currentY = -100;

  window.addEventListener(
    "mousemove",
    (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.classList.add("is-visible");
    },
    { passive: true }
  );

  document.addEventListener("mouseleave", () => {
    cursor.classList.remove("is-visible");
  });

  document.addEventListener(
    "mouseover",
    (event) => {
      const interactive = event.target.closest("a, button");
      cursor.classList.toggle("is-active", Boolean(interactive));
    },
    { passive: true }
  );

  const follow = () => {
    currentX += (targetX - currentX) * 0.2;
    currentY += (targetY - currentY) * 0.2;
    const offset = cursor.classList.contains("is-active") ? 22 : 13;
    cursor.style.transform = `translate3d(${currentX - offset}px, ${
      currentY - offset
    }px, 0)`;
    window.requestAnimationFrame(follow);
  };
  window.requestAnimationFrame(follow);
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initExperience);
  } else {
    initExperience();
  }
}
