export type Project = Record<string | string, string>;

export const Projects: Project[] = [
  {
    id: 'hf_profile',
    img_path: './images/hf-profile.png',
    description_general: 'AI projects - OSS',
    title: 'AI Agents and Tools',
    description_specific: 'AI Chatbots, Agents, and Tools',
    tools_1: 'Python, SBERT, Hugging Face',
    tools_2: 'Smolagents, NLTK, Airflow, OpenLineage',
    category: 'AI',
    links: {'huggingface': 'https://huggingface.co/merobi-hub'}
  },
  {
    id: 'airflow_quick',
    img_path: './images/airflow_quickstart_lrg.png',
    description_general: 'Tutorials - Product',
    title: 'Apache Airflow Quickstart',
    description_specific: 'Quickstart with ETL and GenAI paths',
    tools_1: 'Astro CLI, Airflow, Postgres, Docusaurus',
    tools_2: 'DuckDB, SBERT, GitHub, Python, Markdown, Docker',
    category: 'AI',
    links: {'Astronomer': 'https://www.astronomer.io/docs/learn/airflow-quickstart'}
  },
  {
    id: 'openlineage_preflight_class',
    img_path: './images/preflight_check_class.png',
    description_general: 'Dev Tool - OSS',
    title: 'OpenLineage Airflow Validator',
    description_specific: 'Class for checking OpenLineage configuration in Airflow',
    tools_1: 'Python, Airflow, OpenLineage',
    tools_2: 'Docusaurus, Markdown',
    category: 'Tools',
    links: {
      'Website': 'https://openlineage.io/docs/next/integrations/airflow/preflight-check-class', 
      'GitHub': 'https://github.com/OpenLineage/OpenLineage/blob/main/website/docs/integrations/airflow/preflight-check-class.md'
    }
  },
  {
    id: 'openlineage_community_page',
    img_path: './images/ol_community.png',
    description_general: 'Webpage - OSS',
    title: 'OpenLineage Community Page',
    description_specific: 'Stateful React TypeScript component of Docusaurus site',
    tools_1: 'React, TypeScript',
    tools_2: 'Docusaurus',
    category: 'web',
    links: {
      'Website': 'https://openlineage.io/community/', 
      'GitHub': 'https://github.com/OpenLineage/OpenLineage/blob/main/website/src/pages/community.tsx'
    }
  },
  {
    id: 'marquez_arcade',
    img_path: './images/marquez_arcade_lrg.png',
    description_general: 'Demo - OSS',
    title: 'Marquez Interactive Demo',
    description_specific: 'Interactive demo using Arcade',
    tools_1: 'Marquez, Airflow, Postgres',
    tools_2: 'Arcade',
    category: 'Demos',
    links: {
      'Website': 'https://marquezproject.ai',
      'GitHub': 'https://github.com/MarquezProject/marquez/pull/3009'
    }
  },
  {
    id: 'airflow_summit_24',
    img_path: './images/airflow_summit_2024_v4.png',
    description_general: 'Presentation - OSS',
    title: 'Airflow Summit 2024 Presentation',
    description_specific: 'Presentation on metrics collection using Apache Airflow',
    tools_1: 'Airflow, Astro, Superset, BigQuery',
    tools_2: 'PyPI API, Snowflake, Python',
    category: 'talks',
    links: {'YouTube': 'https://youtu.be/unpgAqUGV9Y?feature=shared'}
  },
  {
    id: 'sbert_blog',
    img_path: './images/sbert_blog_3.png',
    description_general: 'Tutorial - OSS',
    title: 'SBERT & NLTK Medium Article',
    description_specific: 'Tutorial on semantic similarity eval using an LLM',
    tools_1: 'SBERT, NLTK, difflib',
    tools_2: 'Hugging Face, Python, GitHub',
    category: 'AI',
    links: {'Medium': 'https://medium.com/@merobi/evaluating-semantic-text-similarity-using-sbert-and-nltk-18f08e51566d'}
  },
  {
    id: 'sbert_gh',
    img_path: './images/similarity_checker.png',
    description_general: 'AI Dev Tool - OSS',
    title: 'Semantic Similarity Evaluation Script',
    description_specific: 'Script for evaluating semantic similarity using an LLM',
    tools_1: 'SBERT, NLTK, difflib',
    tools_2: 'Hugging Face, Python, GitHub',
    category: 'AI',
    links: {'GitHub': 'https://github.com/merobi-hub/text-similarity-checker'}  
  },
  {
    id: 'picky_blog',
    img_path: './images/picky_blog.png',
    description_general: 'Blog - Marketing',
    title: 'Observability Benefits Blog',
    description_specific: 'Marketing blog post on Astro Observe',
    tools_1: 'Astro, Airflow',
    tools_2: 'Google suite',
    category: 'Blogs',
    links: {'Blog': 'https://www.astronomer.io/blog/pickiness-pays-leveraging-key-insights-with-airflow-and-astro/'}
  },
  {
    id: 'obsv_101_blog',
    img_path: './images/obsv_101.png',
    description_general: 'Blog - Marketing',
    title: 'Observability 101 Blog',
    description_specific: 'Marketing blog post on Astro Observe',
    tools_1: 'Astro, Airflow',
    tools_2: 'Google suite',
    category: 'Blogs',
    links: {'Blog': 'https://www.astronomer.io/blog/data-observability-101-an-introduction-to-the-most-critical-features-of-modern-data-observability/'}
  },
  {
    id: 'mqz_tutorial',
    img_path: './images/marquez_tutorial.png',
    description_general: 'Tutorial - OSS',
    title: 'Marquez+Airflow Tutorial',
    description_specific: 'Tutorial on getting started with Airflow+Marquez',
    tools_1: 'Marquez, OpenLineage',
    tools_2: 'OSS Airflow, Markdown',
    category: 'Tutorials',
    links: {'Marquez': 'https://marquezproject.ai/docs/tutorials/airflow_tutorial/'}
  },
  {
    id: 'sla_vid',
    img_path: './images/slas_video.png',
    description_general: 'Videos - Product',
    title: 'Astronomer SLAs Video',
    description_specific: 'Highlight video on Astro Observe',
    tools_1: 'Astro Observe, Airflow',
    tools_2: 'OBS, Google Slides',
    category: 'Videos',
    links: {}
  },
  {
    id: 'dp_vid',
    img_path: './images/youtube_data_prods.png',
    description_general: 'Videos - Product',
    title: 'Astronomer Data Products Videos',
    description_specific: 'Highlight video on Astro Observe',
    tools_1: 'Astro Observe, Airflow',
    tools_2: 'OBS, Google Slides',
    category: 'Videos',
    links: {}
  },
  {
    id: 'observe_guides',
    img_path: './images/astronomer_learn.png',
    description_general: 'Guides & tutorials - OSS & Product',
    title: 'Astronomer Observability Content',
    description_specific: 'Guides & tutorials on Astro Observe & Airflow',
    tools_1: 'Astro Observe, Airflow, Docusaurus',
    tools_2: 'Astro CLI, OpenLineage, Python, Markdown',
    category: 'Guides',
    links: {'Astronomer': 'https://www.astronomer.io/docs/learn/category/observability-concepts'}
  },
  {
    id: 'webinar',
    img_path: './images/obsv_webinar.png',
    description_general: 'Presentation - Product',
    title: 'Astronomer Observability Webinar',
    description_specific: 'Webinar on observability and Astro Observe',
    tools_1: 'Astro Observe, Airflow',
    tools_2: 'Google Slides',
    category: 'talks',
    links: {'Astronomer': 'https://www.astronomer.io/events/webinars/introduction-to-observability-for-data-pipelines-video/'}
  },
  {
    id: 'ol_update',
    img_path: './images/youtube.png',
    description_general: 'Presentation - Community',
    title: 'OpenLineage Update & Demo',
    description_specific: 'Project update, config guidance, and demo',
    tools_1: 'Astro, Airflow, Postgres, S3',
    tools_2: 'Marquez, Colima, Zoom',
    category: 'talks',
    links: {'youtube': 'https://youtu.be/dm1Jqa0EGKE?feature=shared'}
  },
  {
    id: 'astro_bp',
    img_path: './images/astro-best-practices.png',
    description_general: 'Docs - Public Contribution',
    title: 'Astro Best Practices Guides',
    description_specific: 'Create & maintain Astro Best Practices guides',
    tools_1: 'Astro, Airflow',
    tools_2: 'Markdown, Docusaurus',
    category: 'Guides',
    links: {'website': 'https://www.astronomer.io/docs/astro/'}
  },
  {
    id: 'maqz_site',
    img_path: './images/marquez_screenshot.svg',
    description_general: 'Landing Page - OSS Contribution',
    title: 'Marquez Header & Messaging Upgrades',
    description_specific: 'Webpage redesign and project marketing improvements',
    tools_1: 'React, Typescript',
    tools_2: 'MaterialUI, Docusaurus',
    category: 'web',
    links: {
      'github': 'https://github.com/MarquezProject/marquez/tree/main/docs/v2', 
      'website': 'https://marquezproject.ai'
    }
  },
  {
    id: 'eco_page',
    img_path: './images/OL_ecosystem.svg',
    description_general: 'Landing Page - OSS Contribution',
    title: 'OpenLineage Ecosystem Page',
    description_specific: 'Responsive webpage for displaying integrations',
    tools_1: 'React, Typescript',
    tools_2: 'MaterialUI, Docusaurus',
    category: 'web',
    links: {
      'github': 'https://github.com/OpenLineage/docs/blob/main/src/pages/ecosystem.tsx', 
      'website': 'https://openlineage.io/ecosystem'
    }
  },
  {
    id: 'ol_quick',
    img_path: './images/openlineage_quickstart.svg',
    description_general: 'Quickstart - OSS Contribution',
    title: 'Upgraded User Guide for OpenLineage',
    description_specific: 'Guide for getting started with OpenLineage+Marquez',
    tools_1: 'Docker, OpenLineage, Marquez, Astro',
    tools_2: 'Markdown, Docusaurus',
    category: 'Guides',
    links: {
      'github': 'https://github.com/OpenLineage/docs/blob/main/docs/guides/airflow-quickstart.md', 
      'website': 'https://openlineage.io/docs/guides/airflow-quickstart'
    }
  },
  {
    id: 'slack_archive',
    img_path: './images/slack_archive.svg',
    description_general: 'Community Management Tool - OSS Contribution',
    title: 'Website for Browsing Slack Archive',
    description_specific: 'Slack history site created using OSS tools',
    tools_1: 'slack-export-viewer, GitHub',
    tools_2: 'Slack',
    category: 'web',
    links: {
      'github': 'https://github.com/OpenLineage/slack-archives', 
      'website': 'https://openlineage.github.io/slack-archives/'
    }
  },
  {
    id: 'eco_survey',
    img_path: './images/ol_survey_form.svg',
    description_general: 'User Survey - OSS Contribution',
    title: 'OpenLineage Ecosystem Survey 2023',
    description_specific: 'Annual community survey',
    tools_1: 'Google forms',
    tools_2: 'Slack',
    category: 'Community',
    links: {
      'blog': 'https://openlineage.io/blog/ecosystem-survey', 
      'survey': 'https://docs.google.com/forms/d/e/1FAIpQLSd967NQ6avQcbkXGVy5I5X549yzDJUXsjeOvt9u1ENepkWwXg/viewform?pli=1'
    }
  },
  {
    id: 'airflow_comm',
    img_path: './images/airflow_community_crop.svg',
    description_general: 'Landing Page - OSS Contribution',
    title: 'Improved Airflow Community Page',
    description_specific: 'Redesign of static webpage employing CSS grid ',
    tools_1: 'Javascript, Hugo',
    tools_2: 'CSS',
    category: 'web',
    links: {
      'github': 'https://github.com/apache/airflow-site/blob/main/landing-pages/site/content/en/community/_index.html', 
      'website': 'https://airflow.apache.org/community'
    }
  },
  {
    id: 'get_changes',
    img_path: './images/changes_screenshot.svg',
    description_general: 'Dev Tool - OSS Contribution',
    title: 'Get Changes',
    description_specific: 'Script for adding changes to a changelog',
    tools_1: 'Python, GitHub API',
    tools_2: 'Click, Typing',
    category: 'Tools',
    links: {'github': 'https://github.com/OpenLineage/OpenLineage/blob/main/dev/get_changes.py'}
  },
  {
    id: 'get_conts',
    img_path: './images/contributors_screenshot.svg',
    description_general: 'Community Management Tool - OSS Contribution',
    title: 'Get Contributor Stats',
    description_specific: 'Script for getting & exporting contributor stats',
    tools_1: 'Python, GitHub API',
    tools_2: 'Pendulum, CSV',
    category: 'Tools',
    links: {'github': 'https://github.com/OpenLineage/OpenLineage/blob/main/dev/get_contributor_stats.py'}
  },
  {
    id: 'get_flights',
    img_path: './images/flights_screenshot.svg',
    description_general: 'Console Application - Individual Project',
    title: 'Get Local Flights',
    description_specific: 'Script for streaming IFOs with the OpenSky API',
    tools_1: 'Python, Requests, Click, Datetime',
    tools_2: 'OpenSky API, country-bounding-boxes',
    category: 'Apps',
    links: {'github': 'https://github.com/merobi-hub/get-local-flights'}
  },
  {
    id: 'lantern',
    img_path: '/images/library_scrnshot.svg',
    description_general: 'Flask Web Application - Individual Project',
    title: 'Lantern Free Library Online',
    description_specific: 'Catalog with data from Google Books API, Blog',
    tools_1: 'Python, Flask, Bootstrap, Gunicorn, Postgres',
    tools_2: 'SQLAlchemy, Werkzeug, Google Books API, Great Expectations',
    category: 'Apps',
    links: {'github': 'https://github.com/merobi-hub/lantern-library-online'}
  },
  {
    id: 'portfolio_app',
    img_path: '/images/portfolio_lighthouse.png',
    description_general: 'React Web Application - Individual Project',
    title: 'webeloper Portfolio',
    description_specific: 'Personal portfolio website with form',
    tools_1: 'TypeScript, React, Bootstrap',
    tools_2: 'MaterialUI, Emailjs, Firebase',
    category: 'Apps',
    links: {'github': 'https://github.com/merobi-hub/portfolio'}
  },
  {
    id: 'copyright',
    img_path: '/images/add_copyright.svg',
    description_general: 'Dev Tool - Individual Project',
    title: 'Add Copyright Tool',
    description_specific: 'Script for adding a copyright to a project',
    tools_1: 'Python, OS, Sys',
    tools_2: 'Bash, Markdown',
    category: 'Tools',
    links: {'github': 'https://github.com/merobi-hub/add-copyright'}
  },
  {
    id: 'license',
    img_path: '/images/license_updater.svg',
    description_general: 'Dev Tool - Individual Project',
    title: 'License Updater Tool',
    description_specific: "Script for updating an open-source project's license",
    tools_1: 'Python, OS',
    tools_2: 'Bash, Markdown',
    category: 'Tools',
    links: {'github': 'https://github.com/merobi-hub/license-updater'}
  },
  {
    id: 'car',
    img_path: '/images/car_api.svg',
    description_general: 'React Web Application - Individual Project',
    title: 'Car Inventory',
    description_specific: 'User-generated API for collectors',
    tools_1: 'TypeScript, MaterialUI',
    tools_2: 'Firebase, Insomnia, React',
    category: 'Apps',
    links: {'github': 'https://github.com/merobi-hub/operators61-week8-car-inventory-react'}
  },
  {
    id: 'atten',
    img_path: '/images/attendance_home.svg',
    description_general: 'Flask Web Application - Individual Project',
    title: 'Attendance Keeper',
    description_specific: 'Lightweight attendance tracker with Google login',
    tools_1: 'OAuthLib, Python, Flask, SQLAlchemy, Psycopg2, Datetime',
    tools_2: 'Jinja, Bootstrap, WTF, Werkzeug, Login, Flash, Heroku',
    category: 'Apps',
    links: {
      'github': 'https://github.com/merobi-hub/attendance_tracker',
      'whoshowed.com': 'https://whoshowed.com'
    }
  },
  {
    id: 'weather',
    img_path: '/images/weather_app_screenshot.svg',
    description_general: 'React Web Application - Individual Project',
    title: "Today's Weather",
    description_specific: 'Searchable weather app',
    tools_1: 'JavaScript, Axios, React',
    tools_2: 'Regex, Firebase, OpenWeatherMap API',
    category: 'Apps',
    links: {
      'github': 'https://github.com/merobi-hub/operators-week7-weather-api', 
      'firebase': 'https://weather-df750.web.app/'
    }
  },
  {
    id: 'f1',
    img_path: '/images/racer.svg',
    description_general: 'React Web Application - Individual Project',
    title: 'F1 Driver Data',
    description_specific: 'Searchable sports data app',
    tools_1: 'JavaScript, Axios, React, Regex',
    tools_2: 'Firebase, Ergast Developer API',
    category: 'Apps',
    links: {
      'github': 'https://github.com/merobi-hub/operators-week7-day3-hw', 
      'firebase': 'https://racer-data-b0f20.web.app/'
    }
  }
]
