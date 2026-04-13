import React, { useId } from 'react';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  error?: string;
}

export function Input({ label, helperText, error, className = '', id: idProp, ...rest }: InputProps) {
  const autoId = useId();
  const id = idProp || autoId;

  const inputClasses = [
    'w-full h-11 px-3',
    'bg-ink-900 border border-ink-700 text-ink-50 placeholder:text-ink-500',
    'font-plex text-sm rounded-xs',
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
      <input id={id} className={inputClasses} {...rest} />
      {error ? (
        <p className="mt-1.5 font-plex text-xs text-signal-danger">{error}</p>
      ) : helperText ? (
        <p className="mt-1.5 font-plex text-xs text-ink-400">{helperText}</p>
      ) : null}
    </div>
  );
}
