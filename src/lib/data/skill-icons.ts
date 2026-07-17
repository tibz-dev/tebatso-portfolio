import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiAxios,
  SiDotnet,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiPostman,
  SiSwagger,
  SiRabbitmq,
  SiApachekafka,
  SiStripe,
  SiCloudinary,
  SiFirebase,
  SiSupabase,
} from "react-icons/si";

import {
  FaMicrosoft,
  FaDatabase,
  FaRobot,
} from "react-icons/fa";

export const SKILL_ICONS: Partial<Record<string, IconType>> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,
  "C++": SiCplusplus,
  HTML: SiHtml5,
  CSS: SiCss,
  React: SiReact,
  "Next.js": SiNextdotjs,
  Angular: SiAngular,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: SiBootstrap,
  Redux: SiRedux,
  Axios: SiAxios,

  ".NET 8": SiDotnet,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,

  "SQL Server": FaDatabase,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  SQLite: SiSqlite,

  "Microsoft Azure": FaMicrosoft,
  "Oracle Cloud Infrastructure": FaDatabase,

  Docker: SiDocker,
  "Docker Compose": SiDocker,

  "GitHub Actions": SiGithubactions,
  Git: SiGit,
  GitHub: SiGithub,

  Vercel: SiVercel,
  Netlify: SiNetlify,

  Postman: SiPostman,
  Swagger: SiSwagger,

  RabbitMQ: SiRabbitmq,
  Kafka: SiApachekafka,

  Stripe: SiStripe,
  Cloudinary: SiCloudinary,
  Firebase: SiFirebase,
  Supabase: SiSupabase,

  "OpenAI APIs": FaRobot,
};