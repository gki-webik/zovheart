<template>
  <div>
    <section class="main" itemscope itemtype="http://schema.org/Organization">
      <div class="text">
        <h1 itemprop="name">Благотворительный фонд "Зов&nbsp;Сердца"</h1>
        <h2>
          ЗОВ СЕРДЦА
          <img
            src="/media/images/heart.svg"
            class="is-heart"
            alt="Символ сердца - логотип фонда"
            itemprop="logo"
          />
        </h2>
        <h3>
          <strong>Россия</strong> – это сила! <br />
          Поддержим наших героев!
        </h3>
        <p itemprop="description">
          Фонд создан для помощи военнослужащим, мирным жителям и детям. <br />
          Все кто желает быть частичкой нашей команды приглашаем в наш дружный
          коллектив.
        </p>
        <a href="#about-us" title="Узнать больше о фонде Зов Сердца"
          >Подробнее</a
        >
      </div>
      <img
        src="/media/images/mainBlock_img.png"
        class="is-main-block"
        alt="Поддержка участников СВО - Благотворительный фонд Зов Сердца"
        loading="eager"
        itemprop="image"
      />
    </section>
    <section
      class="about-us"
      id="about-us"
      itemscope
      itemtype="http://schema.org/NGO"
    >
      <h2>Кто мы такие?</h2>
      <div class="items">
        <div class="item is-1">
          <img
            src="/media/images/p1.png"
            alt="Волонтер фонда Зов Сердца"
            loading="lazy"
          />
          <img
            src="/media/images/p4.png"
            alt="Участник благотворительной программы"
            loading="lazy"
          />
          <div class="text">
            <p itemprop="description">
              Сегодня наша страна снова столкнулась с вызовом, и наши бойцы с
              честью выполняют свой долг в
              <strong>Специальной Военной Операции (СВО)</strong>.
              <br />
              Они чьи то –
              <strong>отцы, сыновья, братья, матери, дочери, жёны</strong> –
              рискуют собой ради мира и безопасности нашей Родины.
            </p>
            <p>
              <strong> Мы – наследники великих победителей!</strong>
              <br />
              Наши предки в 1941–1945 отстояли свободу, и сегодня пришло наше
              время проявить единство.
              <br />
              <strong>Россия всегда побеждает, когда мы вместе!</strong>
            </p>
          </div>
        </div>

        <div class="item is-2">
          <img
            src="/media/images/p2.png"
            alt="Волонтер фонда помощи военнослужащим"
            loading="lazy"
          />
          <img
            src="/media/images/p3.png"
            alt="Участник благотворительной акции"
            loading="lazy"
          />
          <div class="text">
            <p itemprop="knowsAbout">
              Здесь мы оказываем поддержку тем, кто на передовой:
              <strong
                >медикаменты, тактические аптечки, носилки, перевязочные
                материалы и всё необходимое</strong
              >.
            </p>
            <p>Каждый вклад – это помощь нашим героям, это шаг к Победе!</p>
            <p>
              <strong>Сила в единстве! Сила в правде! Сила в России!</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="requisites"
      id="requisites"
      aria-labelledby="requisites-heading"
      itemscope
      itemtype="http://schema.org/Organization"
    >
      <div class="left">
        <h2 id="requisites-heading">Наши реквизиты</h2>
        <p>
          <strong>Полное наименование организации:</strong>
          <span itemprop="legalName"
            >Благотворительный фонд поддержки и реализации социально значимых
            программ и проектов «Зов сердца»</span
          >
        </p>
        <p>
          <strong>Сокращенное наименование организации:</strong>
          <span itemprop="name">Фонд «Зов сердца»</span>
        </p>
        <p><strong>Действует на основании</strong></p>
        <p>
          <strong>ОГРН</strong> <span itemprop="identifier">1247700418900</span>
        </p>
        <p>
          <strong>Юридический адрес:</strong>
          <span
            itemprop="address"
            itemscope
            itemtype="http://schema.org/PostalAddress"
          >
            <span itemprop="postalCode">127030</span>,
            <span itemprop="addressLocality">г.Москва</span>,
            <span itemprop="streetAddress"
              >ул. Новослободская, д. 20, пом. 26/1/2</span
            >
          </span>
        </p>
        <p><strong>ИНН</strong> <span itemprop="taxID">9707031578</span></p>
        <p><strong>КПП</strong> 770701001</p>
        <p><strong>Расчетный счет</strong> 40703810038000110803</p>
        <p><strong>Корр. Счет</strong> 30101810400000000225</p>
        <p><strong>БИК</strong> 044525225</p>
        <p><strong>Банк ПАО СБЕРБАНК</strong></p>
        <p>
          Наименование платежа - Благотворительное пожертвование на уставную
          деятельность (НДС не облагается)
        </p>
      </div>
      <div class="right">
        <img
          src="/media/images/qr.png"
          alt="QR-код для благотворительного пожертвования в фонд Зов Сердца"
          loading="lazy"
        />
      </div>
    </section>
    <section class="media" aria-labelledby="media-heading">
      <h2 id="media-heading">Медиа</h2>
      <div class="items" itemscope itemtype="http://schema.org/MediaGallery">
        <div
          class="item is-photo"
          itemprop="associatedMedia"
          itemscope
          itemtype="http://schema.org/ImageObject"
        >
          <img
            src="/media/images/camo.png"
            alt="Фотоматериалы о деятельности фонда Зов Сердца"
            loading="lazy"
            itemprop="contentUrl"
          />
        </div>
        <div
          class="item is-video"
          v-for="(video, index) in videos"
          :key="index"
          @mouseover="showButton(index)"
          @mouseleave="hideButton(index)"
          itemprop="associatedMedia"
          itemscope
          itemtype="http://schema.org/VideoObject"
        >
          <video
            :ref="'video' + index"
            :src="video.src"
            preload="metadata"
            :aria-label="video.ariaLabel"
            @loadedmetadata="setVideoTime(index)"
            @pause="onVideoPause(index)"
            @play="onVideoPlay(index)"
            itemprop="contentUrl"
          ></video>
          <meta itemprop="name" :content="video.ariaLabel" />
          <button
            :ref="'button' + index"
            @click="playVideo(index)"
            aria-label="Воспроизвести видео"
            class="play-button"
            v-html="buttonPlay"
          ></button>
        </div>
        <div
          class="item is-photo"
          itemprop="associatedMedia"
          itemscope
          itemtype="http://schema.org/ImageObject"
        >
          <img
            src="/media/images/camo.png"
            alt="Фотоотчет о помощи военнослужащим"
            loading="lazy"
            itemprop="contentUrl"
          />
        </div>
        <div
          class="item is-photo"
          itemprop="associatedMedia"
          itemscope
          itemtype="http://schema.org/ImageObject"
        >
          <img
            src="/media/images/camo.png"
            alt="Фотографии с мероприятий фонда"
            loading="lazy"
            itemprop="contentUrl"
          />
        </div>
      </div>
    </section>
    <section class="tg_group">
      <div class="text">
        <h2>Мы в Telegram</h2>
        <p>
          Подписывайся на наш Telegram канал. Сила в единстве! Сила в правде!
          Сила в России!
        </p>
        <a
          href="https://t.me/+aw81BypL0tYwMzVi"
          target="_blank"
          rel="noopener"
          title="Перейти в Telegram канал фонда Зов Сердца"
          itemprop="sameAs"
          >Вступить</a
        >
      </div>
      <img
        src="/media/images/camo.png"
        alt="Присоединяйтесь к нам в Telegram - фонд Зов Сердца"
        loading="lazy"
      />
    </section>
    <section class="help" id="feedback" aria-labelledby="feedback-heading">
      <div class="left">
        <h2 id="feedback-heading">Обратная связь</h2>
        <p>Остались вопросы? Напиши нам через форму обратной связи!</p>
        <form
          action=""
          method="post"
          itemscope
          itemtype="http://schema.org/ContactPoint"
        >
          <input
            type="text"
            placeholder="Имя"
            aria-label="Ваше имя"
            required
            itemprop="name"
          />
          <input
            type="text"
            placeholder="Тема"
            aria-label="Тема сообщения"
            required
          />
          <input
            type="email"
            placeholder="Email"
            aria-label="Ваш email"
            required
            itemprop="email"
          />
          <textarea
            placeholder="Сообщение"
            aria-label="Текст сообщения"
            required
          ></textarea>
          <button type="submit">Отправить</button>
        </form>
      </div>
      <div class="right">
        <img
          src="/media/images/soldier.png"
          alt="Поддержка военнослужащих - миссия фонда Зов Сердца"
          loading="lazy"
        />
      </div>
    </section>
    <section
      class="info_sponsorship"
      id="sponsors"
      aria-labelledby="sponsors-heading"
      itemscope
      itemtype="http://schema.org/Article"
    >
      <h2 id="sponsors-heading" itemprop="headline">
        Информация для Спонсоров
      </h2>
      <div itemprop="articleBody">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt ex justo, eu pharetra lorem dignissim sit amet. Suspendisse
          ullamcorper magna vel sapien interdum, eget porttitor tellus
          tincidunt. Nunc ut imperdiet nibh, nec ultrices metus. Sed vitae
          ultricies dolor. Aenean et fermentum quam. Sed eleifend in enim quis
          malesuada. Aenean augue tellus, elementum id auctor vel, tempor eget
          eros. Nullam finibus orci sed urna ultricies, at lacinia mauris
          tempor. Phasellus augue lectus, convallis in nibh id, placerat
          malesuada arcu. Quisque nunc ligula, facilisis nec nisl ut, vestibulum
          cursus justo. Donec sed eros hendrerit, iaculis ante dictum,
          consectetur nisl. Nullam non magna mi. Nunc iaculis rutrum orci, eu
          consequat arcu varius sed. Nunc at nunc a erat dignissim hendrerit.
        </p>
        <p>
          Sed justo arcu, volutpat et magna in, fermentum efficitur dui. Morbi
          vitae est ac dolor vestibulum fringilla sed dictum orci. Curabitur
          vulputate mauris at eros laoreet semper. Sed hendrerit leo in congue
          pharetra. Curabitur aliquam, quam vitae tincidunt condimentum, eros
          justo volutpat diam, in cursus leo turpis at odio. Etiam suscipit
          vulputate mollis. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Praesent nunc nisi, laoreet eget massa quis, tincidunt
          posuere nunc.
        </p>
        <p>
          Mauris quis sapien cursus, convallis purus vel, imperdiet ante.
          Phasellus eget dolor sed eros vulputate gravida nec non ante. In hac
          habitasse platea dictumst. Integer nunc eros, sagittis sed nulla in,
          euismod viverra risus. Aenean feugiat elit vestibulum justo auctor
          dignissim. Morbi id varius nisl. Pellentesque at dolor varius, aliquam
          urna et, semper nulla. Pellentesque odio quam, mollis ac lectus et,
          rhoncus volutpat neque. Ut eget massa volutpat, imperdiet justo at,
          molestie elit. Sed vel laoreet magna.
        </p>
      </div>
    </section>
    <section
      class="info_volunteer"
      id="volunteers"
      aria-labelledby="volunteers-heading"
      itemscope
      itemtype="http://schema.org/Article"
    >
      <h2 id="volunteers-heading" itemprop="headline">
        Информация для Волонтеров
      </h2>
      <div itemprop="articleBody">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt ex justo, eu pharetra lorem dignissim sit amet. Suspendisse
          ullamcorper magna vel sapien interdum, eget porttitor tellus
          tincidunt. Nunc ut imperdiet nibh, nec ultrices metus. Sed vitae
          ultricies dolor. Aenean et fermentum quam. Sed eleifend in enim quis
          malesuada. Aenean augue tellus, elementum id auctor vel, tempor eget
          eros. Nullam finibus orci sed urna ultricies, at lacinia mauris
          tempor. Phasellus augue lectus, convallis in nibh id, placerat
          malesuada arcu. Quisque nunc ligula, facilisis nec nisl ut, vestibulum
          cursus justo. Donec sed eros hendrerit, iaculis ante dictum,
          consectetur nisl. Nullam non magna mi. Nunc iaculis rutrum orci, eu
          consequat arcu varius sed. Nunc at nunc a erat dignissim hendrerit.
        </p>
        <p>
          Sed justo arcu, volutpat et magna in, fermentum efficitur dui. Morbi
          vitae est ac dolor vestibulum fringilla sed dictum orci. Curabitur
          vulputate mauris at eros laoreet semper. Sed hendrerit leo in congue
          pharetra. Curabitur aliquam, quam vitae tincidunt condimentum, eros
          justo volutpat diam, in cursus leo turpis at odio. Etiam suscipit
          vulputate mollis. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Praesent nunc nisi, laoreet eget massa quis, tincidunt
          posuere nunc.
        </p>
        <p>
          Mauris quis sapien cursus, convallis purus vel, imperdiet ante.
          Phasellus eget dolor sed eros vulputate gravida nec non ante. In hac
          habitasse platea dictumst. Integer nunc eros, sagittis sed nulla in,
          euismod viverra risus. Aenean feugiat elit vestibulum justo auctor
          dignissim. Morbi id varius nisl. Pellentesque at dolor varius, aliquam
          urna et, semper nulla. Pellentesque odio quam, mollis ac lectus et,
          rhoncus volutpat neque. Ut eget massa volutpat, imperdiet justo at,
          molestie elit. Sed vel laoreet magna.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        {
          src: "/media/video/1.mp4",
          ariaLabel: "Видео о деятельности фонда Зов Сердца",
          isPlaying: false,
        },
        {
          src: "/media/video/1.mp4",
          ariaLabel: "Видеоотчет о работе волонтеров",
          isPlaying: false,
        },
        {
          src: "/media/video/1.mp4",
          ariaLabel: "Видео о гуманитарной помощи",
          isPlaying: false,
        },
      ],
      buttonPlay:
        "<svg width='117.000000' height='117.000000' viewBox='0 0 117 117' fill='none' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect id='Прямоугольник 6' x='5.000000' y='5.000000' rx='34.000000' width='107.000000' height='107.000000' stroke='#00F238' stroke-opacity='1.000000' stroke-width='10.000000'/><path id='Многоугольник 1' d='M75.5 54.66L53 41.67C49.66 39.75 45.5 42.16 45.5 46L45.5 71.99C45.5 75.83 49.66 78.24 53 76.32L75.5 63.33C78.83 61.4 78.83 56.59 75.5 54.66Z' fill='#00F238' fill-opacity='1.000000' fill-rule='evenodd'/></svg>",
    };
  },
  methods: {
    getVideoRef(index) {
      return this.$refs["video" + index][0];
    },
    getButtonRef(index) {
      return this.$refs["button" + index][0];
    },
    playVideo(index) {
      const video = this.getVideoRef(index);
      const button = this.getButtonRef(index);

      if (video) {
        if (video.paused) {
          video.play();
          this.videos[index].isPlaying = true;
          button.classList.add("is-opacity-0");
          button.classList.remove("is-opacity-1");
        } else {
          video.pause();
          this.videos[index].isPlaying = false;
          button.classLisremovedd("is-opacity-0");
          button.classList.add("is-opacity-1");
        }
      }
    },
    showButton(index) {
      const button = this.getButtonRef(index);
      const video = this.getVideoRef(index);

      if (
        !this.videos[index].isPlaying ||
        (this.videos[index].isPlaying && video.paused)
      ) {
        button.classList.remove("is-opacity-0");
        button.classList.add("is-opacity-1");
      }
    },
    hideButton(index) {
      const button = this.getButtonRef(index);
      const video = this.getVideoRef(index);

      if (this.videos[index].isPlaying && !video.paused) {
        button.classList.add("is-opacity-0");
        button.classList.remove("is-opacity-1");
      }
    },
    setVideoTime(index) {
      const video = this.getVideoRef(index);
      if (video) {
        video.currentTime = 1;
      }
    },
    onVideoPause(index) {
      const button = this.getButtonRef(index);
      this.videos[index].isPlaying = false;
      button.classList.remove("is-opacity-0");
      button.classList.add("is-opacity-1");
    },
    onVideoPlay(index) {
      this.videos[index].isPlaying = true;
    },
  },
};
</script>

<style>
@import url("~/public/styles/dist/min/Main.min.css");
</style>