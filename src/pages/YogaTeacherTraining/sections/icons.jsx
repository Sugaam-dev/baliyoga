import React from "react";
import {
  Clock, Heart, Calendar, Award, Globe, Sun, Wind, Feather, Coffee,
  Brain, BrainCircuit, BookOpen, Leaf, Sparkles, Shield, Dumbbell,
  Users, Mountain, Trees, Waves, Camera, Bed, Utensils, Compass,
  Moon, MapPin, Music, Wifi, Star, CheckCircle, ArrowRight,
  ChevronRight, ChevronDown, AlignEndHorizontal, BellRing, Sunrise,
} from "lucide-react";

const ICONS = {
  clock: Clock,
  heart: Heart,
  calendar: Calendar,
  award: Award,
  globe: Globe,
  sun: Sun,
  wind: Wind,
  feather: Feather,
  coffee: Coffee,
  brain: Brain,
  brainCircuit: BrainCircuit,
  book: BookOpen,
  leaf: Leaf,
  sparkles: Sparkles,
  shield: Shield,
  dumbbell: Dumbbell,
  users: Users,
  mountain: Mountain,
  trees: Trees,
  waves: Waves,
  camera: Camera,
  bed: Bed,
  utensils: Utensils,
  compass: Compass,
  moon: Moon,
  map: MapPin,
  mapPin: MapPin,
  music: Music,
  wifi: Wifi,
  star: Star,
  checkCircle: CheckCircle,
  arrowRight: ArrowRight,
  chevronRight: ChevronRight,
  chevronDown: ChevronDown,
  align: AlignEndHorizontal,
  bellRing: BellRing,
  sunrise: Sunrise,
};

/**
 * Returns a lucide-react icon element for a given icon name (as used in
 * the data files), falling back to Sparkles if the name isn't recognized.
 */
export const getIcon = (name, size = 18, className = "") => {
  const IconComponent = ICONS[name] || Sparkles;
  return <IconComponent size={size} className={className} />;
};

export default ICONS;