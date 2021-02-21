// index.ts
import { Router } from '@vaadin/router';
import './app'; // Adding the lit-app component here for better performance

const routes = [
  {
    path: '/',
    component: 'lit-app',
    children: [
      {
        path: 'blog',
        component: 'lit-blog',
        action: async () => {
          await import('./blog/blog');
        },
        children: [
          {
            path: '',
            redirect: '/blog/posts',
          },
          {
            path: 'posts',
            component: 'lit-blog-posts',
            action: async () => {
              await import('./blog/blog-posts');
            },
          },
          {
            path: 'posts/:id',
            component: 'lit-blog-post',
            action: async () => {
              await import('./blog/blog-post');
            },
          },
        ],
      },
      {
        path: 'product',
        component: 'lit-product',
        action: async () => {
          await import('./product/product');
        },
        children: [
          {
            path: '',
            redirect: '/product/products',
          },
          {
            path: 'products',
            component: 'lit-products',
            action: async () => {
              await import('./product/products');
            },
          },
          {
            path: 'products/:id',
            component: 'product-details',
            action: async () => {
              await import('./product/product-details');
            },
          },
        ],
      },
      {
        path: 'look',
        component: 'lit-look',
        action: async () => {
          await import('./look/look');
        },
        children: [
          {
            path: '',
            redirect: '/look/looks',
          },
          {
            path: 'looks',
            component: 'lit-looks',
            action: async () => {
              await import('./look/looks');
            },
          },
          {
            path: 'look/:id',
            component: 'look-details',
            action: async () => {
              await import('./look/look-details');
            },
          },
        ],
      },
      {
        path: 'talent',
        component: 'lit-talent',
        action: async () => {
          await import('./talent/talent');
        },
        children: [
          {
            path: '',
            redirect: '/talent/talent-list',
          },
          {
            path: 'talent-list',
            component: 'talent-list',
            action: async () => {
              await import('./talent/talent-list');
            },
          },
          {
            path: 'talent/:id',
            component: 'talent-details',
            action: async () => {
              await import('./talent/talent-details');
            },
          },
        ],
      },
      {
        path: 'talent',
        component: 'lit-talent',
        action: async () => {
          await import('./talent/talent');
        },
      },
    ],
  },
];

const outlet = document.getElementById('outlet');
export const router = new Router(outlet);
router.setRoutes(routes);
