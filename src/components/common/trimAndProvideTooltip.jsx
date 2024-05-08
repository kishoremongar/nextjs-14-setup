import { Tooltip } from '@mantine/core';

const TrimAndProvideTooltip = ({
  value,
  position,
  multiline,
  toolTipText,
  limit = 0,
  width,
  withArrow,
  transitionType,
  tooltipClassess,
  valueClassess,
}) => {
  return (
    <Tooltip
      label={toolTipText ?? value}
      color='#1E3E59'
      disabled={value?.length <= limit}
      position={position ?? 'top-start'}
      multiline={multiline ?? true}
      withArrow={withArrow ?? false}
      events={{ touch: true }}
      classNames={{
        tooltip: `text-sm break-all ${tooltipClassess ?? ''}`,
      }}
      w={width}
      transitionProps={{
        duration: 200,
        transition: transitionType ?? 'fade',
      }}
    >
      <div className={`${valueClassess ?? ''}`}>
        {value.length > limit ? `${value.slice(0, limit)}...` : value}
      </div>
    </Tooltip>
  );
};

export default TrimAndProvideTooltip;
