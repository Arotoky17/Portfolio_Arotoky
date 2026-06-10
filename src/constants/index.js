import { 
  Code2, 
  Database, 
  Globe, 
  Layers, 
  LayoutDashboard, 
  Lock, 
  MessageSquare, 
  Server, 
  ShieldCheck, 
  Smartphone,
  Cpu,
  GitBranch,
  Terminal,
  BarChart3
} from 'lucide-react';

export const PERSONAL_INFO = {
  name:      "Andrianarivelo",
  firstName: "Arotoky",
  role:      "Étudiant L3 Génie Logiciel · Dev Fullstack",
  location:  "Madagascar",
  email:     "arotoky.andrianarivelo@example.com",
  github:    "https://github.com/Arotoky17",
  linkedin:  "https://linkedin.com",
  cvUrl:     "/cv.pdf",
  avatar:    "/profile-v2.png",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Fanambina",
    description: "Site web vitrine développé pour l'association Fanambina. Hébergé sur Vercel avec une interface claire et moderne.",
    tags: ["HTML", "Frontend", "Vercel"],
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
    link: "https://associationfanambina.vercel.app",
    category: "Web App"
  },
  {
    id: 2,
    title: "CSM Blog Collaboratif",
    description: "Plateforme de blog moderne et collaborative développée avec TypeScript, permettant la gestion de contenu à plusieurs.",
    tags: ["TypeScript", "Fullstack", "Collaboration"],
    image: "https://images.unsplash.com/photo-1551288049-bbda38a5f9a2?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Arotoky17/CSM-BLOG-Collaboratif",
    category: "Application"
  },
  {
    id: 3,
    title: "Gestion de Marchés Publics",
    description: "Plateforme de gestion dématérialisée et de transparence des appels d'offres publics. Déployée en ligne avec suivi en temps réel.",
    tags: ["JavaScript", "Fullstack", "Plateforme"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
    link: "https://marcher-pub.vercel.app",
    category: "Web App"
  }
];

export const SKILLS = [
  { name: "React.js", icon: Code2, category: "Frontend" },
  { name: "Node.js", icon: Server, category: "Backend" },
  { name: "PostgreSQL", icon: Database, category: "Database" },
  { name: "Tailwind CSS", icon: Globe, category: "Frontend" },
  { name: "REST API", icon: Cpu, category: "Backend" },
  { name: "Git", icon: GitBranch, category: "Tools" },
  { name: "Docker", icon: Layers, category: "Tools" },
  { name: "Express.js", icon: Terminal, category: "Backend" },
  { name: "Statistiques", icon: BarChart3, category: "Data" },
  { name: "Sécurité (JWT)", icon: ShieldCheck, category: "Security" }
];

export const NAV_LINKS = [
  { name: "Accueil",      to: "home"     },
  { name: "À propos",    to: "about"    },
  { name: "Projets",     to: "projects" },
  { name: "Compétences", to: "skills"   },
  { name: "Contact",     to: "contact"  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Arotoky a livré notre plateforme de gestion bien avant le délai imparti. La qualité du code est irréprochable et la communication a été exemplaire tout au long du projet.",
    name:    "Jean-Pierre Rakoto",
    role:    "Directeur Technique",
    company: "TechMada Solutions",
    avatar:  "https://i.pravatar.cc/80?u=jpr-rakoto",
  },
  {
    id: 2,
    quote:
      "Un développeur fullstack d'exception. Son sens du détail côté UI et sa maîtrise du backend Node.js ont transformé notre idée en un produit que nos utilisateurs adorent.",
    name:    "Sophie Andriamahefa",
    role:    "CEO & Co-fondatrice",
    company: "DigitalHub MG",
    avatar:  "https://i.pravatar.cc/80?u=sophie-hub-mg",
  },
  {
    id: 3,
    quote:
      "Excellente collaboration sur notre API sécurisée. Arotoky comprend les enjeux métier et propose des solutions techniques adaptées. Je le recommande sans hésitation.",
    name:    "Marc Rasolofo",
    role:    "Product Manager",
    company: "Fintech Africa",
    avatar:  "https://i.pravatar.cc/80?u=marc-fintech-af",
  },
];
