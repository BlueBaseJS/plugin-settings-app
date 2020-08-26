import { useBlueBase, useIntl, useTheme } from '@bluebase/core';

export function useScreenProps() {
	const BB = useBlueBase();
	const intl = useIntl();
	const { theme } = useTheme();

	return { BB, intl, theme };
}
