'use client';

import { Component } from 'react';

interface Props {
  children: React.ReactNode;
}
interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center mt-10 text-destructive">
          Something went wrong.
        </div>
      );
    }
    return this.props.children;
  }
}
