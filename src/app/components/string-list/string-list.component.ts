import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

const MIN_LINES = 2;

@Component({
  selector: 'app-string-list',
  templateUrl: './string-list.component.html',
  styleUrls: ['./string-list.component.scss']
})
export class StringListComponent implements OnInit {
  completeTextAsString = '';
  // text: Array<string> = new Array<string>('', '', '');

  formGroup = new FormGroup({
    texts: new FormArray([
      new FormControl('123456789012345678901234567890'),
    ])
  });


  constructor() {
  }

  ngOnInit() {
    this.addLineField();
    // this.addLineField();
  }

  get texts(): FormArray {
    return this.formGroup.get('texts') as FormArray;
  }

  addLineField() {
    this.texts.push(new FormControl(''));
    console.log('qt lines: ' + this.texts.length);
  }


  write(idx: number, evt: KeyboardEvent) {
    console.log('0');
    if (evt.key === 'Enter') {
      console.log('1');
      this.moveDown(idx);
      console.log('2');
      this.moveTextDown(idx, evt.target['selectionStart']);
      console.log('3');
      evt.stopPropagation();
      console.log('4');
    } else if (evt.key === 'Backspace') {
      if (idx > 0 && evt.target['selectionStart'] === 0) {
        this.moveUp(idx);
        if (idx > MIN_LINES) {
          for (let i = this.texts.length - 1; i >= idx; i--) {
            if (this.texts.at(i).value === '') {
              this.texts.removeAt(i);
            }
          }
        }
      }
    } else if (evt.key === 'ArrowUp') {
      this.moveUp(idx);
    } else if (evt.key === 'ArrowDown') {
      this.moveDown(idx);
    }
    // this.completeTextAsString = this.completeTextAsString + evt.key;
    // console.log(evt);
  }

  moveDown(idx: number) {
    console.log('move down');
    this.addLineIfNeed(idx);
    console.log(idx);
    if (idx >= 0 && this.texts.length > idx) {
      // this.texts.at(idx +1);
      const nextLineId = 'line' + Number(idx + 1);
      const currentLineId = 'line' + Number(idx);

      const currentLine = document.getElementById(currentLineId);
      console.log('next line id:' + currentLineId);
      console.log('next line:' + nextLineId);
      console.log('lines:' + this.texts.length);
      // if (nextLine) {
      setTimeout(() => {
        const nextLine = document.getElementById(nextLineId);
        nextLine.focus();
      }, 0);
      // }
      // else {
      //     console.log('could not find line with id: ' + nextLineId);
      //   }
      // console.log(currentLine);
    }
  }

  moveUp(idx: number) {
    if (idx > 0) {
      // this.texts.at(idx +1);
      const nextLineId = 'line' + Number(idx - 1);
      // console.log(nextLineId);
      const nextLine = document.getElementById(nextLineId);
      // console.log(nextLine);
      setTimeout(() => nextLine.focus(), 0);
    }
  }

  changeText(evt: string, idx: number) {
    console.log('CHANGE');
    const completeText = evt;
    if (evt.length > 30) {
      this.texts.at(idx).setValue(completeText.substr(0, 30));
      this.texts.at(idx + 1).setValue(completeText.substr(30, 30) + this.texts.at(idx + 1).value);
    }
    // console.log(idx + '= ' + evt);
  }

  private moveTextDown(idx: number, startAt: number) {
    this.addLineIfNeed(idx);
    const completeText = this.texts.at(idx).value;
    this.texts.at(idx).setValue(completeText.substr(0, startAt));
    this.texts.at(idx + 1).setValue(completeText.substr(startAt, 30) + this.texts.at(idx + 1).value);
  }

  private addLineIfNeed(idx: number) {
    if (this.texts.length === idx + 1) {
      console.log('ADD:' + this.texts.length + ' idx:' + idx + 1);
      this.addLineField();
    }
  }
}
