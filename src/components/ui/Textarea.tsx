import React, { useId } from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export function Textarea({ label, helperText, error, rows = 4, className = '', id: idProp, ...rest }: TextareaProps) {
  const autoId = useId();
  const id = idProp || autoId;

  const textareaClasses = [
    'w-full px-3 py-3',
    'bg-ink-900 border border-ink-700 text-ink-50 placeholder:text-ink-500',
    'font-plex text-sm rounded-xs resize-y',
    'transition-colors duration-base ease-brutal',
    'focus:border-mint-500 focus:outline-none',
    error ? 'border-signal-danger' : '',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className="w-full">
      {label ? (
        <label
          htmlFor={id}
          className="block mb-2 font-mono font-medium uppercase tracking-[0.12em] text-[11px] text-ink-400"
        >
          {label}
        </label>
      ) : null}
      <textarea id={id} rows={rows} className={textareaClasses} {...rest} />
      {error ? (
        <p className="mt-1.5 font-plex text-xs text-signal-danger">{error}</p>
      ) : helperText ? (
        <p className="mt-1.5 font-plex text-xs text-ink-400">{helperText}</p>
      ) : null}
    </div>
  );
}
