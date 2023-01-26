import { Button, Group, TextInput } from "@mantine/core";

export default function SubscriptionForm() {
  return (
    <Group>
      <TextInput
        size="lg"
        placeholder="Ex: jazeelandteam@yes.com"
        style={{ flexGrow: 1 }}
      />
      <Button size="lg">Subscribe</Button>
    </Group>
  );
}
