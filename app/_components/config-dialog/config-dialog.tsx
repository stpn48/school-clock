import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { AppearanceSection } from "./appearance-section/appearance-section";
import { DialogTriggerButton } from "./dialog-trigger";

export function ConfigDialog() {
  return (
    <Dialog>
      <DialogTriggerButton />
      <DialogContent className="flex h-[75%] w-[50vw] flex-col gap-4">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>

        <AppearanceSection />
      </DialogContent>
    </Dialog>
  );
}
