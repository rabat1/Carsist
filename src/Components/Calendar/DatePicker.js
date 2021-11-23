import { enGB, registerTranslation } from 'react-native-paper-dates'
registerTranslation('en-GB', enGB)
import * as React from 'react';
import { Button } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';

export default function ReadMeExampleSingle() {
  const [date, setDate] = React.useState < Date | undefined > (undefined);
  const [open, setOpen] = React.useState(false);

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);
  const onConfirmSingle = React.useCallback(
    (params) => {
      setOpen(false);
      setDate(params.date);
    },
    [setOpen, setDate]
  );

  return (
    <View>
      <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">
        Pick single date
      </Button>
      <DatePickerModal
        locale="en"
        mode="single"
        visible={open}
        onDismiss={onDismissSingle}
        date={date}
        onConfirm={onConfirmSingle}
      // validRange={{
      //   startDate: new Date(2021, 1, 2),  // optional
      //   endDate: new Date(), // optional
      //   disabledDates: [new Date()] // optional
      // }}
      // onChange={} // same props as onConfirm but triggered without confirmed by user
      // saveLabel="Save" // optional
      // label="Select date" // optional
      // animationType="slide" // optional, default is 'slide' on ios/android and 'none' on web
      />
    </View>
  );
}