import { Input } from "@/components/ui/common/Input";
// import MarkdocButton from "@/documents/elements/markdowns/button.mdx";

export function InputView() {
  return (
    <div className="space-y-6">
      <section className="space-y-1">
        <span className="font-semibold">Normal</span>
        <Input placeholder="기본 입력" />
      </section>

      <section className="space-y-1">
        <span className="font-semibold">Placeholder</span>
        <Input placeholder="이메일을 입력하세요" />
      </section>

      <section className="space-y-1">
        <span className="font-semibold">Disabled</span>
        <Input disabled placeholder="비활성화 상태" />
      </section>

      <section className="space-y-1">
        <span className="font-semibold">Error</span>
        <Input error placeholder="이메일을 입력하세요" />
        <p className="text-xs text-redsoft">이메일 형식이 올바르지 않습니다.</p>
      </section>

      <section className="space-y-1">
        <span className="font-semibold">Read Only</span>
        <Input readOnly value="readonly value" />
      </section>

      <section className="space-y-1">
        <span className="font-semibold">Custom Width</span>
        <Input className="w-[240px]" placeholder="너비 지정" />
      </section>
    </div>
  );
}
