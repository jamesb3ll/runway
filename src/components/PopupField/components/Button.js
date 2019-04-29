import React from 'react';
import PropTypes from 'prop-types';

import noop from '../../../utils/noop';

import {
  fontSize,
  colours,
  letterSpacing,
  layout,
  fontFamily,
  fontWeight
} from '../../../theme/airways';

const buttonStyles = {
  label: 'runway-popup-field__button',
  position: 'relative',
  height: '6rem',
  width: '100%',
  maxWidth: '100%',
  border: 0,
  padding: `0 ${layout.gutter}`,
  cursor: 'pointer',
  backgroundColor: colours.darkerGrey,
  color: colours.white,
  fontFamily: fontFamily.body,
  fontSize: fontSize.body,
  fontWeight: fontWeight.regular
};

export function ButtonContent({ largeButtonValue, smallButtonValue }) {
  return (
    <div
      css={{
        maxWidth: '100%',
        minWidth: 0
      }}
    >
      <div
        css={{
          label: 'runway-popup-field__value--large',
          fontSize: fontSize.large,
          letterSpacing: letterSpacing.small,
          lineHeight: '2.65rem'
        }}
      >
        {largeButtonValue}
      </div>
      <div
        css={{
          label: 'runway-popup-field__value--small',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}
      >
        {smallButtonValue}
      </div>
    </div>
  );
}

ButtonContent.propTypes = {
  largeButtonValue: PropTypes.string,
  smallButtonValue: PropTypes.string
};

ButtonContent.defaultProps = {
  largeButtonValue: '',
  smallButtonValue: ''
};

function Button({
  largeButtonValue,
  smallButtonValue,
  onClick,
  onBlur,
  setButtonRef,
  open,
  buttonLabel,
  placeHolder,
  Icon
}) {
  const buttonHasValue = !!largeButtonValue || !!smallButtonValue;

  return (
    <button
      type="button"
      aria-haspopup="dialog"
      aria-expanded={open}
      onClick={onClick}
      onBlur={onBlur}
      ref={setButtonRef}
      css={buttonStyles}
    >
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <span
          css={{
            label: 'runway-popup-field__label',
            position: 'absolute',
            top: '5px',
            left: '7px',
            color: 'white',
            textTransform: 'uppercase',
            fontSize: fontSize.label
          }}
        >
          {buttonLabel}
        </span>
        {buttonHasValue && (
          <ButtonContent
            largeButtonValue={largeButtonValue}
            smallButtonValue={smallButtonValue}
          />
        )}
        {!buttonHasValue && (
          <div
            css={{
              label: 'runway-popup-field__placeholder',
              color: colours.darkGrey,
              fontSize: fontSize.large,
              letterSpacing: letterSpacing.small
            }}
          >
            {placeHolder}
          </div>
        )}
        {!buttonHasValue && !!Icon && (
          <Icon
            css={{
              label: 'runway-popup-field__icon',
              position: 'absolute',
              right: '10px',
              fill: colours.darkGrey
            }}
            height="36"
            width="36"
          />
        )}
      </div>
    </button>
  );
}

Button.propTypes = {
  largeButtonValue: PropTypes.string,
  smallButtonValue: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  setButtonRef: PropTypes.func.isRequired,
  open: PropTypes.bool,
  buttonLabel: PropTypes.string,
  placeHolder: PropTypes.string,
  Icon: PropTypes.func
};

Button.defaultProps = {
  largeButtonValue: '',
  smallButtonValue: '',
  onBlur: noop,
  open: false,
  buttonLabel: '',
  placeHolder: '',
  Icon: null
};

export default Button;
