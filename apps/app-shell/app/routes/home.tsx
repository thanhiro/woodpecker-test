// Uncomment this line to use CSS modules
import type { Route } from "./+types/home";

import styles from './app.module.css';
import { Button } from '@my-workspace/shared-ui';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function Home() {
  console.log("Home RSC");
  
  return (
    <div>
      <h1>App Shell</h1>
      <Button label="Click me" />
    </div>
  );
}
export function ServerComponent() {
  return (<Home />);
}
