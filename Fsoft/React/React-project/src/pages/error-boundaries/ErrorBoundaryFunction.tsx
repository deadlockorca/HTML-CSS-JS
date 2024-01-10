import React from "react";

function ErrorBoundaryFunction({ error, resetErrorBoundary }: any) {
    return (
        <div>
            <p>Something went wrong with your component</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
}
export default ErrorBoundaryFunction;