import { createFileRoute } from '@tanstack/react-router'
import AuthLayout from '../../layouts/authlayout';
export const Route = createFileRoute('/(auth)')({
  component: AuthLayout,
});
